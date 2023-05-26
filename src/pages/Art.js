import React, {Component} from "react";
import { ArtList } from "../components/ArtList";
import ArtItem  from '../components/ArtItem';
import "../styles/Art.css";
import { Link } from "react-router-dom";


export default class Art extends Component {
render() {
  return (
    <div className="art">
      <h1 className="menuTitle">Art for Sale</h1>
      <div className="menuList">
        {ArtList.map((artItem, detailart) => {
          return (
            <Link to={'/art/:detailart'} style={{ textDecoration: 'none' }}>
            <ArtItem key={detailart}
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

}
