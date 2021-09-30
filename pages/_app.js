import "../styles.css";
import dynamic from "next/dynamic";
import { TinaEditProvider } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";
const EditMode = dynamic(() => import("../components/editMode"), { ssr: false });
// const TinaCloudCloudinaryMediaStore = dynamic(() => {
//   return import("next-tinacms-cloudinary").then(m => m.TinaCloudCloudinaryMediaStore)
// }, { ssr: false });
// import { TinaCloudCloudinaryMediaStore } from "next-tinacms-cloudinary";

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const NEXT_PUBLIC_USE_LOCAL_CLIENT =
  process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0;
const NEXT_PUBLIC_HIDE_EDIT_BUTTON =
  process.env.NEXT_PUBLIC_HIDE_EDIT_BUTTON || 0;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <TinaEditProvider
        showEditButton={!Boolean(Number(NEXT_PUBLIC_HIDE_EDIT_BUTTON))}
        editMode={
          <EditMode Component={Component} pageProps={pageProps}  />
        }
      >
        <Layout
          rawData={pageProps}
          data={pageProps.data?.getGlobalDocument?.data}
        >
          <Component {...pageProps} />
        </Layout>
      </TinaEditProvider>
    </>
  );
};

export default App;
