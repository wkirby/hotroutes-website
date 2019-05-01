import React from "react";
import Head from "next/head";

import "../../assets/sass/main.scss";
import siteData from "../../data/site.yaml";

const Favicon = ({ href }) => (
  <>
    <link rel="shortcut icon" href={href} type="image/x-icon" />
    <link rel="icon" href={href} type="image/x-icon" />
  </>
);

export const Layout = ({ heroImage, pageTitle, children, ...props }) => {
  const title = pageTitle
    ? `${pageTitle} | ${siteData.page_title}`
    : siteData.page_title;

  return (
    <>
      <Head>
        <Favicon href="/static/img/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"
        />

        <title>{title}</title>
        <meta property="og:title" content={title} />
        {heroImage && <meta property="og:image" content={heroImage} />}
        <meta name="description" content={siteData.description} />
      </Head>

      <main id="main" {...props}>
        {children}
      </main>
    </>
  );
};
