import React, {useState} from "react";
import { ArtList } from "../components/ArtList";
import ArtItem  from '../components/ArtItem';
import "../styles/Art.css";

function Art() {

  const [data, setData] = useState({img: '', i: 0})

    const viewImage = (ArtItem, i)=> { 
        setData({ArtItem, i})
    }
  return (
    <div className="art">
      <h1 className="menuTitle">Art for Sale</h1>
      <div className="menuList">
        {ArtList.map((artItem, i) => {
          return (
            
            <ArtItem 
                    key={i}
                    image={artItem.image}
                    name={artItem.name}
                    price={artItem.price}
                    onClick={()=>viewImage(artItem.image, i)}
                />
                
          );
        })}
      </div>
    </div>
  );
}

export default Art;
