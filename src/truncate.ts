/**
 * Tronque une chaîne à une longueur donnée
 * @param str - La chaîne à tronquer
 * @param length - Longueur maximale
 * @param suffix - Suffixe à ajouter (par défaut: '...')
 * @returns La chaîne tronquée
 * @example
 * ```typescript
 * truncate('Hello World', 5); // 'Hello...'
 * truncate('Short', 10); // 'Short'
 * truncate('Hello World', 8, '---'); // 'Hello---'
 * ```
 */
export function truncate(
  str: string,
  length: number,
  suffix: string = "..."
): string {
  if (!str || typeof str !== "string") {
    return "";
  }

  if (length < 0) {
    return "";
  }

  if (str.length <= length) {
    return str; // 👈 OPTIMISATION : Pas de traitement inutile
  }

  return str.substring(0, length) + suffix;
}
