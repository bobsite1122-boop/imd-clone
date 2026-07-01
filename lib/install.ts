import { cache } from 'react'
import { getInstallContent } from '@/lib/cms/reader'
import type { InstallContent } from '@/lib/cms/schemas'

export type InstallSettings = InstallContent

export const getInstallSettings = cache(async (): Promise<InstallSettings> => {
  return getInstallContent()
})
