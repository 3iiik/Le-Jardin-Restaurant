'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary border-t border-primary/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl text-primary font-bold">Le Jardin</p>
            <p className="text-cream/40 text-xs mt-1">{t('footer.tagline')}</p>
          </div>
          <p className="text-cream/30 text-xs">{t('footer.rights')}</p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com/3iik.dev" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-primary transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://m.me/3iik.dev" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-primary transition-colors" aria-label="Messenger">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
