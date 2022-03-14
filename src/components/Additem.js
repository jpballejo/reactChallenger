import React from "react";
import './Additem.css';
const Additem = (props) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(props.item);
    props.setItem('');
  };

  const handleSave = (e) => {
    e.preventDefault();
    props.handleSave(props.item);
  };

  return (
    <div className="container">
      <form >
        <input
          type="text"
          placeholder="Ingrese su item."
          onChange={(e) => props.setItem(e.target.value)}
          value={props.item}
        />
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default Additem;