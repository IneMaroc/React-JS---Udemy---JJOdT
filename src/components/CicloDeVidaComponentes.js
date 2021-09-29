import { Component } from "react"


//COMPONENTE DE CLASE 
class CicloDeVidaComponentes extends Component {
  
  constructor (props) {
    super(props);
      console.log("constructor");
      this.state = {
        name: "",
      };
  }

  componentDidMount() {
    console.log("did Mount")
  }

  componentDidUpdate() { /*se le pueden pasar parametros (prevProps, prevState, snapshot)*/
    console.log("did Update")
  }

  shouldComponentUpdate() {
    return true; //true actualiza false lo previene
   
  }

  getSnapshotBeforeUpdate(prevProps, prevState ) {
    console.log("getSnapshotBeforeUpdate");
    // return 0
  }

  render() {
    return (
    <div>
    Hola
    <input value={this.state.name} onChange={({target: {value}}) => this.setState({name: value})} />
    </div>);
    
  }
}

//COMPONENTE FUNCIONAL 
const CicloDeVidaFuncional = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  /* componentDidUpdate */
  useEffect (() => {
    console.log("didUpdate effect")

  });

  /*componentDidMount*/
  useEffect (()=> {
     console.log("didMount effect")

    return () => {
      console.log("willUnmount  ")
    }
  }, []);


  useEffect (()=> {
    console.log("name cambio")
  }, [name])

  useEffect (()=> {
    console.log("age cambio")
  }, [age])


  
  
return (
  <div>
  Hola
  <input value={name} onChange={({target: {value}}) => setName(value)}/>
  <input value={age} onChange={({target: {value}}) => setAge(value)}/>
  </div>
  );
   
}

export default CicloDeVidaFuncional;
export default CicloDeVidaComponentes;