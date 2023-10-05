import movement from "./images/movement.png";
import favicon from "./images/favicon.ico";
import electricity from "./images/electricity.png";
import drop from "./images/drop.png";
import spring from "./images/spring.png";
import bending from "./images/bend.png";
import { Link } from "react-router-dom";
import { Data } from "./Data";
const Elements = () => {
  function What_image(Element) {
if(Element.type==="movement"){
  return movement;
}else if(Element.type==="favicon"){
  return favicon;
}else if(Element.type==="electricity"){
  return electricity;
}else if(Element.type==="bend"){
  return bending;
}else if(Element.type==="spring"){
  return spring;
}else if(Element.type==="drop"){
  return drop;
}
  }
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
        <section key={Element.id} className="new">
          <Link to={`/wzory/${Element.id}`} style={{background:`linear-gradient(70deg,${NewColor()} 20%, rgba(255, 255, 255, 1) 53%)`}}>
            <img draggable="false" src={What_image(Element)} alt={Element.type}></img>
            <section className="name">{Element.name}</section>
          </Link>
        </section>
      ))}
    </>
  );
};
export default Elements;