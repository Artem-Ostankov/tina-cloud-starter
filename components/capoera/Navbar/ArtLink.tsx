import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type NextComposedProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & NextLinkProps

const navigation = [
  { name: 'Training', href: '#' },
  { name: 'Verein', href: '#' },
  { name: 'Capoeira', href: '#' },
  { name: 'Galerie', href: '#' },
]
const ArtLink = React.forwardRef<HTMLAnchorElement, NextComposedProps>((props, ref) => {
  const { as, href, replace, scroll, shallow, prefetch, ...other } = props
  // const router = useRouter()
  // const pathname = typeof href === 'string' ? href : href.pathname
  // const className = clsx(classNameProps, {
  //   [activeClassName]: router.pathname === pathname && activeClassName,
  // })

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
    >
      <a
        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        ref={ref}
        {...other}
      />
    </NextLink>
  )
})

export default ArtLink
