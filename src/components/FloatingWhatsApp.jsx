import { useEffect, useState } from 'react'
import { waLink } from '../utils/whatsapp'
import { WhatsAppIcon } from './icons'

/* Floating WhatsApp button — mobile/tablet only (CSS hides it ≥900px).
   Appears only after the user scrolls past the hero, so it never
   competes with the hero CTA. */
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 520)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={visible ? 'fab is-visible' : 'fab'}
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <WhatsAppIcon size={26} />
      WhatsApp
    </a>
  )
}
