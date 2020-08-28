export function toSnakeCase (value: string): string {
  return value.replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`);
};

export function keysToSnakeCase (obj: Object) {
  let res = {};
  Object.keys(obj).map(key => res[toSnakeCase(key)] = obj[key]);
  return res;
};
