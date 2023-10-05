import { Data,NewData } from "./Data";
import Header from "./Header";
const New = () => {
  function handleSubmit(event) {
    event.preventDefault();
    const EditElem = newElement(
      Data.length+1,
      event.target.name.value,
      event.target.type.value,
      event.target.formulas.value.split(","),
      event.target.content.value
    );
    try {
      NewData(EditElem);
      console.log("Udało się");
    } catch (error) {
      console.error(error);
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
          <form onSubmit={handleSubmit} id="form">
            <input
              id="hidden"
              type="text"
              name="id"
              disabled
            />
            <h2>Nazwa:</h2>
            <input
              required
              name="name"
              type="text"
            />
            <h2>Typ:</h2>
            <select required name="type">
              <option value="movement">ruch</option>
              <option value="drop">ciecze</option>
              <option value="electricity">elektryczność</option>
              <option value="spring">sprężyna</option>
              <option value="bend">zakrzywienie światła</option>
            </select>
            <h2>Podaj wzory po przecinku:</h2>
            <textarea
              required
              cols={50}
              rows={5}
              type="text"
              name="formulas"
            />
            <h2>Podaj definicję:</h2>
            <textarea
              required
              cols={80}
              rows={5}
              type="text"
              name="content"
            />
            <button type="submit">Wyślij</button>
          </form>
      </section>
    </>
  );
};
export default New;