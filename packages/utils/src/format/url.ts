export const getQueryParam = (key: string, url = window.location.href): string | null =>
    new URL(url).searchParams.get(key);

export const setQueryParam = (key: string, value: string, url = window.location.href): string => {
    const u = new URL(url);
    u.searchParams.set(key, value);
    return u.toString();
};

export const removeQueryParam = (key: string, url = window.location.href): string => {
    const u = new URL(url);
    u.searchParams.delete(key);
    return u.toString();
};

export const parseQueryString = (search: string): Record<string, string> =>
    Object.fromEntries(new URLSearchParams(search).entries());

export const buildQueryString = (params: Record<string, string | number | boolean>): string =>
    new URLSearchParams(
        Object.entries(params).map(([k, v]) => [k, String(v)])
    ).toString();

export const joinPath = (...segments: string[]): string =>
    segments
        .map((s) => s.replace(/^\/+|\/+$/g, ''))
        .filter(Boolean)
        .join('/');

export const getDomain = (url: string): string => {
    try {
        return new URL(url).hostname;
    } catch {
        return '';
    }
};
