import Link from 'next/link'

type BreadcrumbItem = {
  name: string
  path: string
}

type SrOnlyBreadcrumbProps = {
  items: BreadcrumbItem[]
}

export default function SrOnlyBreadcrumb({ items }: SrOnlyBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="sr-only">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.path}>
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
