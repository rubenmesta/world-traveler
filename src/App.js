import "./styles/App.scss";
import { Layout } from "./components/Layout";
import { Card } from "./components/Card/Card";
import data from "./_data/traveler.json";

function App({ title }) {
  return (
    <Layout>
      <nav></nav>
      <main className="container">
        <h1 className="title">{data.title}</h1>
        <section className="wrapper">
          {data.cards.map((card, index) => {
            return (
              <Card
                key={index}
                src={card.src}
                alt={card.alt}
                destination={card.destination}
                className={card.class}
                eyebrow={card.eyebrow}
                city={card.city}
                date={card.date}
                description={card.description}
                flip={card.flip}
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
