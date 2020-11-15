export const setThemeColor = () => {
    if (!window || !document) return;
    const el = document.querySelectorAll('[data-testid="weather"');
    if (!el[0]) return;
    const actualTypeColor = window.getComputedStyle(el[0], null).getPropertyValue('background');
    const theme = `${actualTypeColor.split(',')[7]},${actualTypeColor.split(',')[8]},${
        actualTypeColor.split(',')[9]
    }`;
    document
        .querySelectorAll('meta[name="theme-color"')[0]
        .setAttribute('content', theme.substr(0, 18));
};

export default {
    setThemeColor,
};
