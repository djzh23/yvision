'use client'
import { useState } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/lib/config'

const categories = ['All', 'Portrait', 'Editorial', 'Product']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter(p => p.category === active)

  return (
    <section id="portfolio" className="bg-brand-fog py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-label uppercase tracking-widest text-brand-silver mb-3">Selected work</p>
            <h2 className="font-display text-title text-brand-ink">Portfolio</h2>
          </div>
          {/* Filter buttons */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} className={`text-small px-4 py-2 border transition-all ${active === cat ? 'bg-brand-ink text-brand-fog border-brand-ink' : 'border-brand-ash/40 text-brand-slate hover:border-brand-ink'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(item => (
            <div key={item.id} className="group relative aspect-[4/5] overflow-hidden bg-brand-ash/10">
              <Image
                src={item.img} alt={item.title} fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <p className="text-label uppercase tracking-widest text-brand-gold mb-1">{item.category}</p>
                <p className="text-body font-medium text-brand-fog">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}