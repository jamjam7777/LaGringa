import React from "react";
import { ArtList } from "../components/ArtList";
import ArtItem  from '../components/ArtItem';
import "../styles/Art.css";

function Art() {
  return (
    <div className="art">
      <h1 className="menuTitle">Art for Sale</h1>
      <div className="menuList">
        {ArtList.map((artItem, key) => {
          return (
          
            <ArtItem 
                    key={key}
                    image={artItem.image}
                    name={artItem.name}
                    price={artItem.price}
                />
          );
        })}
      </div>
    </div>
  );
}

export default Art;
