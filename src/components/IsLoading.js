import {useState, useEffect} from "react"

const jsonData = [{
  key:1,
  name:"juan",
},{
  key:2,
  name:"Ignacio",
},{
  key:3,
  name:"maria",
},{
  key:4,
  name:"Ines",
},{
  key:5,
  name:"Pipita",
}];


//COMPONENTE FUNCIONAL 
const IsLoading = () => {
  const [IsLoading, setIsLoading] = useState(true)

  useEffect (()=> {
    setTimeout(()=>{
      setIsLoading(false);

    }, 4000)
  }, []);

  const rennderData = () => {
    return jsonData?.map((value) => (
      <div key={value.key}>
      <p>{value.name}</p>
      </div>
    ))
  };
  
return (
  <div>
  
    {IsLoading? <h2>Is Loading.... spiner!</h2> : rennderData()}
    
  </div>
  );
   
}

export default IsLoading;