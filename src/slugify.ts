/**
 * Convertit une chaîne en slug (URL-friendly)
 * @param str - La chaîne à convertir
 * @param separator - Le séparateur à utiliser (par défaut: '-')
 * @returns Le slug généré
 * @example
 * ```typescript
 * slugify('Hello World!'); // 'hello-world'
 * slugify('Café & Restaurant', '_'); // 'cafe_restaurant'
 * ```
 */
export function slugify(str: string, separator: string = '-'): string {
  if (!str || typeof str !== 'string') {
    return '';
  }

  // Échapper le séparateur pour l'utiliser dans les regex
  const escapedSeparator = separator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  return str
    .toLowerCase()
    .trim()
    // Remplacer les caractères accentués
    .replace(/[àáäâ]/g, 'a')
    .replace(/[èéëê]/g, 'e')
    .replace(/[ìíïî]/g, 'i')
    .replace(/[òóöô]/g, 'o')
    .replace(/[ùúüû]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c')
    // Supprimer TOUS les caractères spéciaux (garder seulement lettres, chiffres, espaces et le séparateur)
    .replace(new RegExp(`[^a-z0-9\\s${escapedSeparator}]`, 'g'), '')
    // Remplacer les espaces multiples par des espaces simples
    .replace(/\s+/g, ' ')
    // Remplacer les espaces par le séparateur
    .replace(/\s/g, separator)
    // Supprimer les séparateurs multiples
    .replace(new RegExp(`${escapedSeparator}+`, 'g'), separator)
    // Supprimer les séparateurs au début et à la fin
    .replace(new RegExp(`^${escapedSeparator}|${escapedSeparator}$`, 'g'), '');
}