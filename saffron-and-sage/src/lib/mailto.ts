/**
 * Builds a mailto: link. The site has no backend, so this is how a visitor
 * can send a request: it opens THEIR email app with the text pre-filled.
 * Nothing is transmitted or stored by this website.
 */
export function buildMailto(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
