export const isEmpty = (data: any) => {
  if (Array.isArray(data)) return !data.length;
  else if (data !== null && typeof data === 'object')
    return !Object.keys(data).length;
  else return !data;
};
