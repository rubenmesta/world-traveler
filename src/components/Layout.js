import { Head } from "./Head";
import meta from "../_data/traveler.json";

export const Layout = ({ children }) => {
  return (
    <>
      <Head title={meta?.title} description={meta?.description} />
      {children}
    </>
  );
};
