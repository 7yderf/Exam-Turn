/* eslint-disable radix */
/* eslint-disable import/prefer-default-export */
export const useCloseDrawer = () => useState('clearDrawer', () => false)
export const useSetFilters = () => useState('setFilters', () => false)
export const parseNumber = (value: string | number) => {
  if (typeof value === 'number') return value
  return parseInt(value.replace(/,/g, ''))
}
