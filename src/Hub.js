import Header from "./Header";
import Elements from "./Elements";
import "./css/Hub.css";
const Hub = () => {
  return (
    <>
      <Header/>
      <main>
        <h1>Witaj na stronie głównej</h1>
        <article>
            Znajdziesz tutaj wzory z wielu działów fizyki oraz rozszerzony
            kalkulator
        </article>
        <section id="news">
        <Elements/>
        </section>
      </main>
    </>
  );
};
export default Hub;