import Header from "./Header";
import "./css/Create.css";
import EditElements from "./EditElements";
import { Link } from "react-router-dom";
const Create = () => {
  return (
    <>
      <Header />
      <main id="editelem">
        <h1>Edytuj aktualne elementy:</h1>
        <section id="edit">
         <EditElements/>
       <Link to={`/new`}><h1 id="create">Stwórz własny Element:</h1></Link>
        </section>
      </main>
    </>
  );
};
export default Create;