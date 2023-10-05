import "./css/Wzory.css";
import Header from "./Header";
import { Data } from "./Data.js";
import { useParams } from "react-router-dom";
import Elements from "./Elements";
const Wzory = () => {
  const { id } = useParams();
  var Element = [];
  for (let i = 0; i < Data.length; i++) {
    if (Data[i].id === parseInt(id)) {
      Element.push(Data[i]);
    }
  }
  function Content() {
    return <>{Element[0].data.content}</>;
  }
  function Formulas() {
    return (
      <section id="wzory">
        {Element[0].data.formula.map((Element, index) => (
          <section className="wzor" key={index}>
            {Element}
          </section>
        ))}
      </section>
    );
  }
  return (
    <div id="all">
      <Header />
      <main>
        <h1>Wzory:</h1>
        <Formulas />
        <h1>Definicja</h1>
        <section id="information">
          <article>
            <Content />
          </article>
        </section>
        <h1>Zobacz inne tematy:</h1>
        <section id="news">
        <Elements/>
        </section>
      </main>
    </div>
  );
};
export default Wzory;
