'use client'

import { useLanguage } from '@/context/LanguageContext'
import SectionAnimation from './SectionAnimation'

export default function ReservationCTA() {
  const { t } = useLanguage()

  return (
    <section id="reservation" className="relative py-20 sm:py-28 bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionAnimation>
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-bold">
            {t('reservation.title')}
          </h2>
          <p className="text-primary-light/70 font-medium mt-3 text-lg">
            {t('reservation.subtitle')}
          </p>
          <p className="text-cream/60 mt-6 leading-relaxed max-w-2xl mx-auto">
            {t('reservation.description')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://instagram.com/3iik.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-3 rounded text-base uppercase tracking-wider transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              {t('reservation.cta')}
            </a>
          </div>
          <div className="mt-8 text-cream/50 text-sm space-y-2">
            <p>{t('reservation.hours')}</p>
          </div>
        </SectionAnimation>
      </div>
    </section>
  )
}
