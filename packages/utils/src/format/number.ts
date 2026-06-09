export const formatCompact = (value: number, locale = 'en-US'): string =>
    new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: 1 }).format(value);

export const formatCurrency = (value: number, currency = 'USD', locale = 'en-US'): string =>
    new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

export const roundTo = (value: number, decimals = 2): number => {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
};

export const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

export const percentage = (value: number, total: number, decimals = 1): number => {
    if (total === 0) return 0;
    return roundTo((value / total) * 100, decimals);
};

export const sumBy = <T>(arr: T[], key: keyof T): number =>
    arr.reduce((acc, item) => acc + Number(item[key] ?? 0), 0);

export const average = (arr: number[]): number => {
    if (arr.length === 0) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
};

export const randomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;
