import logo from "./logo.svg";
import "./App.scss";
import { Layout } from "./components/Layout";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <Layout>
      <nav></nav>
      <section className="wrapper">
        <Card
          src="/images/london-img.jpg"
          destination="international"
          className="Card full"
        />
        <Card
          src="/images/atlanta-img.png"
          destination="domestic"
          className="Card firstHalf"
        />
        <Card
          src="/images/singapore-img.jpg"
          destination="international"
          className="Card secondHalf"
        />
      </section>
      <footer></footer>
    </Layout>
  );
}

export default App;
