import React, { FC } from 'react'

const navigation = [
  { name: 'Training', href: '#' },
  { name: 'Verein', href: '#' },
  { name: 'Capoeira', href: '#' },
  { name: 'Galerie', href: '#' },
]

export const Middle: FC = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden items-center my-24">
      <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide p-4">
        Erfahre mehr über Capoeira über unseren Kurzfilm
      </p>

      <div className="">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FvPKcQeA1_s"
          title="Capoeira in Salzburg mit Valdo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
