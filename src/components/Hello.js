import {useState} from "react"


//COMPONENTE FUNCIONAL 
function Hello() {
  //HOOK DE ESTADO
  const [name, setName] = useState("Ine");
  const [age] = useState(32);
  const [,setSomething] = useState("hey!");

  //manejadores

  const handleHeyClick = () => {
    setName("Pipi");
  };

 //codigo que se renderiza 
  return (
    <div className="App">
      <h2> Hola {name} </h2>
      <p>{age}</p>
      <button onClick={handleHeyClick}>Hey</button>
    </div>
  );
};

export default Hello;