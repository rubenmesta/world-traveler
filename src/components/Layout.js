import { Head } from "./Head";

export const Layout = ({ children }) => {
  return (
    <>
      <Head
        title="World Traveler App"
        description="This is a demo for Regions Bank"
      />
      {/* {title && title} */}
      {children}
      {/* a footer could go here */}
    </>
  );
};
