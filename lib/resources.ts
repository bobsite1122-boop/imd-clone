import { cache } from 'react'
import { getResourcesContent } from '@/lib/cms/reader'
import type { BooksSectionContent, ResourceCategoryContent, ResourcesContent } from '@/lib/cms/schemas'

export type ResourceCategory = ResourceCategoryContent
export type BooksSection = BooksSectionContent
export type ResourcesData = ResourcesContent

export const getResources = cache(async (): Promise<ResourcesData> => {
  return getResourcesContent()
})
