import "./styles/App.scss";
import { Layout } from "./components/Layout";
import { Card } from "./components/Card/Card";
import data from "./_data/traveler.json";

function App({ title }) {
  return (
    <Layout>
      <nav></nav>
      <main className="container">
        <header>
          <h1 className="title">{data.title}</h1>
        </header>
        <section className="wrapper">
          {data.cards.map((card, index) => {
            return (
              <Card
                key={index}
                image={card.image}
                destination={card.destination}
                className={card.class}
                details={card.details}
              />
            );
          })}
        </section>
      </main>
      <footer></footer>
    </Layout>
  );
}

export default App;
