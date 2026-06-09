export const setTheme = (theme: 'light' | 'dark'): void => {
    const themeLink = document.getElementById('theme-style') as HTMLLinkElement | null;
    if (themeLink) themeLink.href = `styles/theme-${theme}.css`;
    document.documentElement.setAttribute('data-theme', theme);
};

export const enableDarkTheme = (): void => setTheme('dark');
export const enableLightTheme = (): void => setTheme('light');

export const getSystemTheme = (): 'light' | 'dark' =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const watchSystemTheme = (callback: (theme: 'light' | 'dark') => void): () => void => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => callback(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
};
