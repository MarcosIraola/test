export function useCapitalize([first, ...rest]: string[]): string {
  return first.toUpperCase() + rest.join('').toLowerCase()
}
