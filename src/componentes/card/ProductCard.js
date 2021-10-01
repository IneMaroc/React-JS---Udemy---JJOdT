import "./productcard.scss";

export default function ProductCard({item}) {
   return (
     <div className="pCard">
          <img className="pCard-img" src={item.pictureUrl} alt={`imagen de ${item.title}`}></img>

          <div className="pCard-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.fulldescription}</p>
          </div>
     </div>
   );
 }