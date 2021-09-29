import { useState } from "react";
import "./searchbox.scss";

export default function SearchBox ({onSearch, onClose}) {
 const [searchText, setSearchText] = useState("");
 

 const handleCloseClick = () => {
     setSearchText("")
     onClose();
 }

    return (
        <div className="searchbox">

            <h3 className="searchbox-title">Buscador de Productos</h3>

            <div className="searchbox-buttons">
                <label className="searchbox-label">
                    <input className="searchBox-input" value={searchText} onChange={({target:{value}}) => setSearchText(value)} />
                </label>
                <button onClick={() => onSearch(searchText)} className="searchbox-button">Buscar </button>
                <button onClick={handleCloseClick} className="searchbox-button">Cerrar </button>
            </div>

        </div>
    )
}