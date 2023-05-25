import { ArtList } from "../components/ArtList";
import ArtItem  from '../components/ArtItem';
import "../styles/Art.css";
import { Link } from "react-router-dom";


function Art() {

  return (
    <div className="art">
      <h1 className="menuTitle">Art for Sale</h1>
      <div className="menuList">
        {ArtList.map((artItem, i) => {
          return (
            <Link to='/art/:detailart'>
            <ArtItem 
                    key={i}
                    image={artItem.image}
                    name={artItem.name}
                    price={artItem.price}
                />
             </Link>   
          );
        })}
      </div>
    </div>
  );
}

export default Art;
