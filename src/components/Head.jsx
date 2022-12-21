// import { Helmet } from "react-helmet-async";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Head = ({ title, description }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
    </HelmetProvider>
  );
};
