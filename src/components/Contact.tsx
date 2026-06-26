'use client'

import { useLanguage } from '@/context/LanguageContext'
import SectionAnimation from './SectionAnimation'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-bold">
            {t('contact.title')}
          </h2>
          <p className="text-primary-light/70 font-medium mt-3 text-lg">
            {t('contact.subtitle')}
          </p>
        </SectionAnimation>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SectionAnimation>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Adresse</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{t('contact.address')}</p>
                </div>
              </div>

              <a
                href="mailto:3iikStudio@proton.me"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Email</h3>
                  <p className="text-primary group-hover:text-primary-light transition-colors text-sm">{t('contact.email')}</p>
                </div>
              </a>

              <a
                href="https://instagram.com/3iik.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Instagram</h3>
                  <p className="text-primary group-hover:text-primary-light transition-colors text-sm">{t('contact.messenger')}</p>
                </div>
              </a>

              <a
                href="https://facebook.com/3iik.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Facebook</h3>
                  <p className="text-primary group-hover:text-primary-light transition-colors text-sm">{t('contact.facebook')}</p>
                </div>
              </a>
            </div>
          </SectionAnimation>

          <SectionAnimation>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t('contact.form_name')}
                className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded text-cream placeholder-cream/30 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <input
                type="email"
                placeholder={t('contact.form_email')}
                className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded text-cream placeholder-cream/30 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <textarea
                rows={5}
                placeholder={t('contact.form_message')}
                className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded text-cream placeholder-cream/30 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-3 rounded text-sm uppercase tracking-wider transition-all hover:scale-105 w-full"
              >
                {t('contact.form_submit')}
              </button>
            </form>
          </SectionAnimation>
        </div>
      </div>
    </section>
  )
}
