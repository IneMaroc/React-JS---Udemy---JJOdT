import { useState } from "react";
import SearchBox from "../searchbox/SearchBox";
import "./search.scss";
import data from "../../data/productos.json"
import SearchResults from "../searchresults/SearchResults";


export default function Search () {

    //const [userData, setUserData] = useState(data); para cuando se usa fetch
    const [results, setResults] = useState([]);


    //console.log(userData);

    const [isAtTop, setIsAtTop] = useState(false);

    const handleCloseClick = () => {
        setIsAtTop(false);
        setResults([]);
    }; 
    
    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if (data?.length) {
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = data.filter((value) => {
                return (
                    value.title.toLowerCase().includes(searchTextMinus) ||
                    value.description.toLowerCase().includes(searchTextMinus) ||
                    value.fulldescription.toLowerCase().includes(searchTextMinus)
                )

            })
            setResults(filteredData);
        }

    };
    console.log(results);
    return (
        <div className={`search ${isAtTop ? "search--center" : "search--top"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick}/>
            <SearchResults results={results}/>

        </div>
    )

};
