/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";

import { IntlProvider } from "react-intl";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import React from "react";
import { useRouter } from "next/router";
import ar from "../public/locales/ar/common.json";
import en from "../public/locales/en/common.json";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [scroll, setScroll] = React.useState(0);

  const [background, setBackground] = React.useState('#FFFFFF');
  const [color, setColor] = React.useState('rgb(2, 52, 71)');

  const messages = {
    ar,
    en,
  };
  function getDirection(locale) {
    if (locale === "ar") {
      return "rtl";
    }

    return "ltr";
  }
 



  React.useEffect(() => {
    // Remove the server-side injected CSS.
    document.dir = getDirection(locale);
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, [locale]);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
            
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default appWithTranslation(MyApp);
