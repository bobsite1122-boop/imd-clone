import { auth } from '@/auth'
import { NextResponse } from 'next/server'
import { seedCmsContentIfEmpty } from '@/lib/cms/write'

export async function POST() {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await seedCmsContentIfEmpty()
    return NextResponse.json({ success: true, ...result })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to seed CMS'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
