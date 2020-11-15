export const setThemeColor = () => {
    if (!window || !document) return;
    const el = document.querySelectorAll('[data-testid="weather"');
    if (!el[0]) return;
    const actualTypeColor = window.getComputedStyle(el[0], null).getPropertyValue('background');
    const theme = `${actualTypeColor.split(',')[4]},${actualTypeColor.split(',')[5]},${
        actualTypeColor.split(',')[6]
    }`;
    console.log(theme);
    document.querySelectorAll('meta[name="theme-color"')[0].setAttribute('content', theme);
};

export default {
    setThemeColor,
};
