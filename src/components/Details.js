import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const items = useSelector((state) => state.items.value);
  const data = useSelector((state) => state.data.value);
  const item = items[id];
  
  return (
    <div>
      <Link to="/list">Go back</Link>
      <div className="todolist">
          <div className="infoList">
            <p>TOTAL:<b>{data.total}</b></p>
            <p>DONE:<b>{data.done}</b></p>
            <p>DELAYED:<b>{data.delayed}</b></p>
          </div>
          <div className="item">
            {item.map((item, index) => {
              return (
                <p className="itemList">{item}</p>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default Details;