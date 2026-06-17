import { auth } from '@/auth'
import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { safeValidateCmsContent } from '@/lib/cms/schemas'
import { writeCmsContent } from '@/lib/cms/write'

export async function POST(request: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const validated = safeValidateCmsContent('pricing', body)
  if (!validated.success) {
    return NextResponse.json({ error: validated.error }, { status: 400 })
  }

  try {
    const data = await writeCmsContent('pricing', validated.data)
    revalidatePath('/')
    return NextResponse.json({ success: true, data })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to save pricing'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
