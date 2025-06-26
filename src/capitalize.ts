/**
 * Met en majuscule la première lettre d'une lettre
 * @param str - La chaine à traiter
 * @returns La chaine avec la première lettre en majuscule
 * @example
 * ``` typescript
 * captitalize('hello world'); // 'Hello Word'
 * captitalize('HELLO'); // 'Hello'
 * ```
 */

export const capitalize = (str: string): string => {
  if (!str || typeof str !== "string") {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
};
