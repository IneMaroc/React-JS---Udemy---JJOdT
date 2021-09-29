import {useState} from "react"


//COMPONENTE FUNCIONAL
function LogIn() {
  //HOOK DE ESTADO
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  //MANEJADORES
  const handleEmailChange = ({target: {value}}) => {
    setEmail(value);
  };

  const handlePasswordChange = ({target: {value}}) => {
    setPassword(value);
  };
  
  const handleFormSubmit = (event) => {
    setIsLogged(true);
    event.preventDefault();
    alert(`Usuario: ${email}, Password: ${password}`);
  }

 //codigo que se renderiza 
  return (
    <div className="LogIn">
      <form onSubmit={handleFormSubmit}>
        <h2>Log In</h2>
        <label>
          Mail
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
        <button type="submit">
        Submit
        </button>
        {isLogged && <h2>Logueado Exitosamente</h2>}
      </form> 
    </div>
  );
};

export default LogIn;