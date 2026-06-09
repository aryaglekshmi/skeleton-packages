export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

export const uniqueBy = <T>(arr: T[], key: keyof T): T[] => {
    const seen = new Set();
    return arr.filter((item) => {
        const k = item[key];
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
    });
};

export const groupBy = <T>(arr: T[], key: keyof T): Record<string, T[]> => {
    return arr.reduce((acc, item) => {
        const group = String(item[key]);
        (acc[group] ??= []).push(item);
        return acc;
    }, {} as Record<string, T[]>);
};

export const chunk = <T>(arr: T[], size: number): T[][] => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
};

export const sortBy = <T>(arr: T[], key: keyof T, direction: 'asc' | 'desc' = 'asc'): T[] => {
    return [...arr].sort((a, b) => {
        const av = a[key], bv = b[key];
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return direction === 'asc' ? cmp : -cmp;
    });
};

export const flattenDeep = <T>(arr: unknown[]): T[] => arr.flat(Infinity) as T[];

export const removeFalsy = <T>(arr: T[]): Exclude<T, false | 0 | '' | null | undefined>[] =>
    arr.filter(Boolean) as Exclude<T, false | 0 | '' | null | undefined>[];

export const countOccurrences = <T>(arr: T[], val: T): number =>
    arr.reduce((count, item) => (item === val ? count + 1 : count), 0);
