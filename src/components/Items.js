import React from "react";
import { useSelector } from 'react-redux'
import '../store/ItemSlicer'
import "./Todolist.css";
import { Link } from 'react-router-dom';

const Items = (props) => {
  const items = useSelector((state) => state.items.value)
  console.log('items'.items);
  console.log('props', props.item);
  return (
    <div >
      {props.items != undefined ? props.items : (items != undefined ? items.map((item, index) => {
        return (
        <div className="item">
           {item.map(item => <p> {item} </p>)}
           <Link to={'/details/'+index} className="link"> See details </Link>
        </div>
        ) }) : null)}
    </div>
  );
}

export default Items;