import "./searchresults.scss";
import ProductCard from '../card/ProductCard'

export default function SearchResults ({results}) {

    return(
        <div className="searchresult">
            {results.map(value => {
                return (
                    <ProductCard key={value.id} item={value} />
                );
            })}
        </div>
    )
};