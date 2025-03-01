import dynamic from "next/dynamic";
import { Layout } from "../components/layout";
const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });
// const TinaCloudCloudinaryMediaStore = dynamic(() => {
//   return import("next-tinacms-cloudinary").then(m => m.TinaCloudCloudinaryMediaStore);
// }, { ssr: false });
import { TinaCloudCloudinaryMediaStore } from "next-tinacms-cloudinary";
import { FC } from "react";

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const NEXT_PUBLIC_USE_LOCAL_CLIENT =
        process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0;

const EditMode: FC<{Component: FC, pageProps: any}> = ({ Component, pageProps }) => {
  // @ts-ignore
  return (
    <TinaCMS
      branch="main"
      clientId={NEXT_PUBLIC_TINA_CLIENT_ID}
      isLocalClient={Boolean(Number(NEXT_PUBLIC_USE_LOCAL_CLIENT))}
      mediaStore={TinaCloudCloudinaryMediaStore}
      cmsCallback={(cms) => {
        import("react-tinacms-editor").then(({ MarkdownFieldPlugin }) => {
          cms.plugins.add(MarkdownFieldPlugin);
        });
      }}
      documentCreatorCallback={{
        /**
         * After a new document is created, redirect to its location
         */
        onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
          const relativeUrl = `/${slug}/${breadcrumbs.join("/")}`;
          return (window.location.href = relativeUrl);
        },
        /**
         * Only allows documents to be created to the `Blog Posts` Collection
         */
        filterCollections: (options) => {
          return options.filter(
            (option) => option.label === "Blog Posts"
          );
        },
      }}
      /**
       * Treat the Global collection as a global form
       */
      formifyCallback={({ formConfig, createForm, createGlobalForm }) => {
        if (formConfig.id === "getGlobalDocument") {
          return createGlobalForm(formConfig);
        }

        return createForm(formConfig);
      }}
      {...pageProps}
    >
      {(livePageProps) => (
        <Layout
          rawData={livePageProps}
          data={livePageProps.data?.getGlobalDocument?.data}
        >
          <Component {...livePageProps} />
        </Layout>
      )}
    </TinaCMS>
  );
};

export default EditMode;
