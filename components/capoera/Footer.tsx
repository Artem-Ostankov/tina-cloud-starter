import React, { FC } from 'react'

const navigation = [
  { name: 'Capoeira', href: '/' },
  { name: 'Training', href: '/#training' },
  { name: 'Verein', href: '/#verein' },
  { name: 'Galerie', href: '/' },
  { name: 'Datenschutzerklärung', href: '/agb' },
]

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.map(item => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-300 hover:text-white">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href={'https://m.facebook.com/CapoeiraRosenheim/'}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Facebook</span>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          Made with ♡ by <a href="https://artware.studio/"> Artware Studio </a>
        </p>
        <p className="mt-2 text-center text-base text-gray-400">&copy; 2021 All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
