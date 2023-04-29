export const FilterNA = (data?: string): string => {
  if (data && data !== 'N/A') {
    return data;
  } else {
    return '–';
  }
};
