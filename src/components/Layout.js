import { Head } from "./Head";

export const Layout = ({ children }) => {
  return (
    <div className="App">
      <Head
        title="World Traveler App"
        description="This is a demo for Regions Bank"
      />
      {/* a header could go here */}
      {children}
      {/* a footer could go here */}
    </div>
  );
};
