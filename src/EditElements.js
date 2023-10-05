import { Data } from "./Data";
import { Link } from "react-router-dom";
const EditElements = () => {
  let formula=[''];
  function NewColor(){
   let rand1= Math.floor(Math.random()*128)
   let rand2= Math.floor(Math.random()*128)
   let rand3= Math.floor(Math.random()*128)
   let color=`rgb(${rand1},${rand2},${rand3})`;
   return color;
  }
  return (
    <>
      {Data.map((Element) => (
        <section style={{borderColor:NewColor()}} key={Element.id} className="edit_element">
          <h2>Nazwa przedmiotu:</h2>
          <article >{Element.name}</article>
          <h2>Typ przedmiotu:</h2>
          <article>{Element.type}</article>
          <h2>Definicja:</h2>
          <article>{Element.data.content}</article>
          <h2>Wzory:</h2>
          <script>
          {formula = Element.data.formula}
          </script>
          {formula.map((Element,index)=>(
            <article key={index}>{Element}</article>
          ))}
          <Link className="editt" to={`/edit/${Element.id}`}><h3>Edytuj ten Element</h3></Link>
        </section>
      ))}
    </>
  );
};
export default EditElements;