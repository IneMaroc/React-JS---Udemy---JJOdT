import { useState } from "react";
import SearchBox from "../searchbox/SearchBox";
import "./search.scss";
import data from "../../data/productos.json"
import SearchResults from "../searchresults/SearchResults";


export default function Search () {

    //const [userData, setUserData] = useState(data); para cuando se usa fetch
    const [results, setResults] = useState([]);

    //console.log(userData);

    const handleCloseClick = () => {
        setResults([]);
    }; 
    
    const handleSearchClick = (searchText) => {
        if (data.length) {
            const searchTextMinus = searchText.toLowerCase();

            if(searchTextMinus.trim().length !== 0) {

                const filteredData = data.filter((value) => {
                    return (
                        value.title.toLowerCase().includes(searchTextMinus) ||
                        value.description.toLowerCase().includes(searchTextMinus) ||
                        value.fulldescription.toLowerCase().includes(searchTextMinus)
                    )
    
                })
                
                {filteredData.length >= 1? setResults(filteredData) : alert(`No tenemos ${searchText}`)}
                

            } else {
                setResults(data);
            }
            
        }

    };
    console.log(results);
    return (
        <div >
            <SearchBox className="search search--top" onSearch={handleSearchClick} onClose={handleCloseClick}/>
            <SearchResults results={results}/>

        </div>
    )

};
