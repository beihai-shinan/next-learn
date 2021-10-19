module.exports = {
  locales: ['zht', 'en', 'zh', 'es', 'ko', 'ja', 'default-ln'],
  defaultLocale: 'default-ln',
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then(m => m.default)
};
