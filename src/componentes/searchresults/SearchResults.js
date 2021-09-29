import "./searchresults.scss";

export default function SearchResults ({results}) {

    return(
        <div className="searchresult">
            {results?.map((value) => {
                return (
                    <div key={value.id} className="searchresult-box">

                        <img className="searchresult-img" src={value.pictureUrl} alt={`imagen de ${value.title}`}></img>

                        <div className="searchresult-details">
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                            <p>{value.fulldescription}</p>
                        </div>
                    
                    </div>
                );
            })}
        </div>
    )
};