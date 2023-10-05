import {  useParams } from "react-router-dom";
import { Data, EditData, DeleteData } from "./Data";
import Header from "./Header";
import "./css/Edit.css";
const Edit = () => {
  const { id } = useParams();
  var Element = [];
  for (let i = 0; i < Data.length; i++) {
    if (Data[i].id === parseInt(id)) {
      Element.push(Data[i]);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    const EditElem = newElement(
      parseInt(event.target.id.value),
      event.target.name.value,
      event.target.type.value,
      event.target.formulas.value.split(","),
      event.target.content.value
    );
    try {
      EditData(EditElem);
      alert("Udało się!")

    } catch (error) {
      console.error(error);
      alert("Wystąpił błąd!");
    }
  }

  function newElement(id, name, type, formulas, content) {
    const Elem = {
      id: id,
      type: type,
      name: name,
      data: {
        formula: formulas,
        content: content,
      },
    };
    return Elem;
  }
  return (
    <>
      <Header />
      <section id="for">
        {Element.map((Element) => (
          <form onSubmit={handleSubmit} id="form" key={Element.id}>
            <input
              id="hidden"
              type="text"
              name="id"
              value={Element.id}
              disabled
            />
            <h2>Nazwa:</h2>
            <input
              required
              name="name"
              type="text"
              defaultValue={Element.name}
            />
            <h2>Typ:</h2>
            <select required name="type" defaultValue={Element.type}>
              <option value="movement">ruch</option>
              <option value="drop">ciecze</option>
              <option value="electricity">elektryczność</option>
              <option value="spring">sprężyna</option>
              <option value="bend">zakrzywienie światła</option>
            </select>
            <h2>Podaj wzory po przecinku:</h2>
            <textarea
              required
              defaultValue={Element.data.formula}
              cols={50}
              rows={5}
              type="text"
              name="formulas"
            />
            <h2>Podaj definicję:</h2>
            <textarea
              required
              defaultValue={Element.data.content}
              cols={80}
              rows={5}
              type="text"
              name="content"
            />
            <button type="submit">Wyślij</button>
            <button onClick={() => DeleteData(Element)}>Delete</button>
          </form>
        ))}
      </section>
    </>
  );
};
export default Edit;