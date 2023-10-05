import "./css/Kalkulator.css";
import Header from "./Header";
const Kalkulator = () => {
  localStorage.setItem("num1", "null");
  localStorage.setItem("sign", "null");
  function HandleClick(event) {
    const content = event.target.textContent;
    console.log(content);
    switch (content.charAt(0)) {
      case "1":
        Number(1);
        break;
      case "2":
        Number(2);
        break;
      case "3":
        Number(3);
        break;
      case "4":
        Number(4);
        break;
      case "5":
        Number(5);
        break;
      case "6":
        Number(6);
        break;
      case "7":
        Number(7);
        break;
      case "8":
        Number(8);
        break;
      case "9":
        Number(9);
        break;
        case "0":
          if(document.getElementById("result").innerText===""){
            alert("Wprowadź inną liczbę niż zero na początek!");
          }else{
            Number(0);
          }
          break;
      case "+":
        Sign(content, 0);
        break;
      case "-":
        Sign(content, 0);
        break;
      case "*":
        Sign(content, 0);
        break;
      case "/":
        Sign(content, 0);
        break;
      case "^":
        Sign(content, 0);
        break;
      case "√":
        Sign(content, 1);
        break;
      case "%":
        Sign(content, 0);
        break;
      case "=":
        Count();
        break;
      default:
        break;
    }
  }
  function Number(number) {
    const content = document.getElementById("result").innerText;
    document.getElementById("result").innerHTML = content + number;
  }
  function Sign(sign, special) {
    const content = document.getElementById("result").innerText;
    if (content === "" || content === null) {
      alert("Wprowadź jakąś liczbę przed znakiem!");
      return;
    }
    if (special === 1) {
      const result = Math.sqrt(content);
      document.getElementById("result").innerHTML = result;
      localStorage.setItem("num1", result);
      return;
    }
    document.getElementById("result").innerHTML = content + sign;
    localStorage.setItem("num1", content);
    localStorage.setItem("sign", sign);
    const signElements = document.querySelectorAll(".sign");
    signElements.forEach((element) => {
      element.disabled = true;
      element.style.backgroundColor = "gray";
    });
  }
  function Count() {
    if (
      localStorage.getItem("num1") === "null" ||
      localStorage.getItem("sign") === "null"
    ) {
      alert("Wprowadź jakieś liczby!");
      return;
    }
    const whole = document.getElementById("result").innerText;
    const num2 = parseFloat(
      whole
        .replace(localStorage.getItem("num1"), "")
        .replace(localStorage.getItem("sign"), "")
    );
    if (num2 === "") {
      alert("Wprowadź jakieś liczby!");
      return;
    }
    const num1 = parseFloat(localStorage.getItem("num1"));
    const signElements = document.querySelectorAll(".sign");
    signElements.forEach((element) => {
      element.disabled = false;
      element.style.backgroundColor = "white";
    });
    let result = 0;
    switch (localStorage.getItem("sign")) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result=num1 * num2;
        break;
      case "/":
        result=num1 / num2;
        break;
      case "^":
        result=Math.pow(num1,num2);
        break;
      case "%":
        result=num1 % num2;
        break;
      default:
        break;
    }
    document.getElementById("result").innerHTML=result;
    localStorage.setItem("num1", "null");
    localStorage.setItem("sign", "null");
  }
  function Clear() {
    const currentLocation = window.location;
    currentLocation.reload();
  }
  return (
    <>
      <Header />
      <main id="main">
        <section id="left">
          <section id="kalkulator">
            <div id="result"></div>
            <button onClick={HandleClick} className="block">
              0
            </button>
            <button onClick={HandleClick} className="block">
              1
            </button>
            <button onClick={HandleClick} className="block">
              2
            </button>
            <button onClick={HandleClick} className="block">
              3
            </button>
            <button onClick={HandleClick} className="block">
              4
            </button>
            <button onClick={HandleClick} className="block">
              5
            </button>
            <button onClick={HandleClick} className="block">
              6
            </button>
            <button onClick={HandleClick} className="block">
              7
            </button>
            <button onClick={HandleClick} className="block">
              8
            </button>
            <button onClick={HandleClick} className="block">
              9
            </button>
          </section>
        </section>
        <section id="right">
          <section id="special_kalkulator">
            <button onClick={HandleClick} className="block sign">
              +
            </button>
            <button onClick={HandleClick} className="block sign">
              -
            </button>
            <button onClick={HandleClick} className="block sign">
              *
            </button>
            <button onClick={HandleClick} className="block sign">
              /
            </button>
            <button onClick={HandleClick} className="block sign">
              ^
            </button>
            <button onClick={HandleClick} className="block sign">
              √
            </button>
            <button onClick={HandleClick} className="block sign">
              %
            </button>
            <button onClick={Count} className="block">
              =
            </button>
            <button onClick={Clear} className="block">
              clear
            </button>
          </section>
        </section>
      </main>
    </>
  );
};
export default Kalkulator;