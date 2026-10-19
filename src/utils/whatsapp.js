import { WHATSAPP_NUMBER, DEFAULT_WA_MESSAGE } from '../content/siteConfig'

export { packageMessage } from '../content/siteConfig'

/**
 * Build a WhatsApp click-to-chat link with an optional pre-filled message.
 * @param {string} [message]
 * @returns {string} https://wa.me/<number>?text=<encoded message>
 */
export function waLink(message = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
