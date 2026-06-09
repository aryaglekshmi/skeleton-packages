export const omit = <T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
    const result = { ...obj };
    keys.forEach((k) => delete result[k]);
    return result;
};

export const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
    return keys.reduce((acc, k) => {
        if (k in obj) acc[k] = obj[k];
        return acc;
    }, {} as Pick<T, K>);
};

export const deepClone = <T>(value: T): T => JSON.parse(JSON.stringify(value));

export const isEmpty = (value: unknown): boolean => {
    if (value == null) return true;
    if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
};

export const mergeDeep = <T extends object>(target: T, source: Partial<T>): T => {
    const result = { ...target };
    for (const key in source) {
        const sv = source[key];
        const tv = result[key];
        if (sv && typeof sv === 'object' && !Array.isArray(sv) && tv && typeof tv === 'object') {
            result[key] = mergeDeep(tv as object, sv as object) as T[typeof key];
        } else {
            result[key] = sv as T[typeof key];
        }
    }
    return result;
};

export const groupByKeys = <T>(arr: T[], keys: (keyof T)[]): Record<string, T[]> => {
    return arr.reduce((acc, item) => {
        const group = keys.map((k) => String(item[k])).join('|');
        (acc[group] ??= []).push(item);
        return acc;
    }, {} as Record<string, T[]>);
};

export const invertObj = (obj: Record<string, string>): Record<string, string> =>
    Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));

export const hasKey = <T extends object>(obj: T, key: PropertyKey): key is keyof T => key in obj;

export const freeze = <T>(obj: T): Readonly<T> => Object.freeze(obj);
