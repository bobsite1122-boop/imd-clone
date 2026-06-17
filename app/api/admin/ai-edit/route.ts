import { auth } from '@/auth'
import { NextResponse } from 'next/server'
import { generateObject } from 'ai'
import { openai } from '@ai-sdk/openai'
import { z } from 'zod'
import {
  type CmsContentId,
  cmsContentIdSchema,
  faqSchema,
  pricingSchema,
  resourcesSchema,
  safeValidateCmsContent,
} from '@/lib/cms/schemas'
import { getCmsContent } from '@/lib/cms/reader'
import { writeCmsContent } from '@/lib/cms/write'
import { revalidatePath } from 'next/cache'

const requestSchema = z.object({
  contentType: cmsContentIdSchema,
  instruction: z.string().min(1).max(2000),
  previewOnly: z.boolean().optional().default(true),
})

const schemaMap = {
  pricing: pricingSchema,
  faq: faqSchema,
  resources: resourcesSchema,
} as const

const revalidateMap: Record<CmsContentId, string> = {
  pricing: '/',
  faq: '/faqs',
  resources: '/databases',
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'OPENAI_API_KEY is not configured' },
      { status: 503 },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = requestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { contentType, instruction, previewOnly } = parsed.data

  try {
    const currentData = await getCmsContent(contentType)

    const { object } = await generateObject({
      model: openai('gpt-4o-mini'),
      schema: schemaMap[contentType],
      system: `You are a CMS content editor for a medical subscription website.
You ONLY modify structured JSON content. Never output code, HTML, markdown, or explanations.
Apply the user's instruction to the current data. Preserve all fields not mentioned in the instruction.
For FAQ items, preserve slugs unless explicitly asked to change them.
For pricing, preserve slug values unless explicitly asked to change them.
Output the complete updated JSON structure.`,
      prompt: `Current data:\n${JSON.stringify(currentData, null, 2)}\n\nInstruction: ${instruction}`,
    })

    const validated = safeValidateCmsContent(contentType, object)
    if (!validated.success) {
      return NextResponse.json(
        { error: `AI output failed validation: ${validated.error}` },
        { status: 400 },
      )
    }

    if (!previewOnly) {
      await writeCmsContent(contentType, validated.data)
      revalidatePath(revalidateMap[contentType])
    }

    return NextResponse.json({ success: true, data: validated.data })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'AI edit failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
