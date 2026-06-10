import { EStorageKey, ETheme } from "@aryagg/types";

export const setTheme = (theme: ETheme): void => {
    const themeLink = document.getElementById('theme-style') as HTMLLinkElement | null;
    if (themeLink) themeLink.href = `styles/theme-${theme}.css`;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(EStorageKey.THEME, theme);
};

export const enableDarkTheme = (): void => setTheme(ETheme.DARK);
export const enableLightTheme = (): void => setTheme(ETheme.LIGHT);

export const getSystemTheme = (): ETheme =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? ETheme.DARK : ETheme.LIGHT;

export const watchSystemTheme = (callback: (theme: ETheme) => void): () => void => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => callback(e.matches ? ETheme.DARK : ETheme.LIGHT);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
};
