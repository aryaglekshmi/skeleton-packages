export const capitalize = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const titleCase = (str: string): string =>
    str.replace(/\w\S*/g, (word) => capitalize(word));

export const slugify = (str: string): string =>
    str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

export const stripHtml = (html: string): string => html.replace(/<[^>]*>/g, '');

export const countWords = (str: string): number =>
    str.trim().split(/\s+/).filter(Boolean).length;

export const initials = (name: string, max = 2): string =>
    name
        .trim()
        .split(/\s+/)
        .slice(0, max)
        .map((part) => part[0]?.toUpperCase())
        .join('');

export const maskString = (str: string, visibleEnd = 4, mask = '*'): string => {
    if (str.length <= visibleEnd) return str;
    return mask.repeat(str.length - visibleEnd) + str.slice(-visibleEnd);
};

export const camelToSnake = (str: string): string =>
    str.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);

export const snakeToCamel = (str: string): string =>
    str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());

export const truncate = (str: string, maxLength: number, suffix = '...'): string => {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - suffix.length) + suffix;
};
