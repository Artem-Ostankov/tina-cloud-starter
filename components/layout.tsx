import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../content/global/index.json";
import { Theme } from "./theme";
import Navbar from "./capoera/Navbar/Navbar";

export const Layout = ({ rawData = "", data = layoutData, children }) => {
  return (
    <>
      <Head>
        <title>Tina</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {data.theme.font === "nunito" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data.theme.font === "lato" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </>
        )}
      </Head>
      <Theme data={data?.theme}>
        <div
          className={`min-h-screen flex flex-col ${
            data.theme.font === "nunito" && "font-nunito"
          } ${data.theme.font === "lato" && "font-lato"} ${
            data.theme.font === "sans" && "font-sans"
          }`}
        >
          {/*<Header data={data?.header} />*/}
          <Navbar/>
          <div className="flex-1 min-h-screen bg-white flex flex-col">
            {children}
          </div>
          <Footer
            rawData={rawData}
            data={data?.footer}
            icon={data?.header.icon}
          />
        </div>
      </Theme>
    </>
  );
};

export const layoutQueryFragment = `
  getGlobalDocument(relativePath: "index.json") {
    data {
      header {
        icon {
          name
          color
          style
        }
        color
        nav {
          href
          label
        }
      }
      footer {
        color
        social {
          facebook
          twitter
          instagram
          github
        }
      }  
      theme {
        color
        icon
        font
        darkMode
      }
    }
  }
`;
