// const { i18n } = require("./next-i18next.config");

// module.exports = {
//     i18n,
// };
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    // The locales you want to support in your app
    locales: ["ar", "en"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
  },
};
