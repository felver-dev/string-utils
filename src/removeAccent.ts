/**
 * Supprime les accents d'une chaîne
 * @param str - La chaîne à traiter
 * @returns La chaîne sans accents
 * @example
 * ```typescript
 * removeAccents('café'); // 'cafe'
 * removeAccents('naïve'); // 'naive'
 * removeAccents('résumé'); // 'resume'
 * ```
 */
export function removeAccents(str: string): string {
  if (!str || typeof str !== 'string') {
    return '';
  }
  
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}