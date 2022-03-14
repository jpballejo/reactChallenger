import "./Items.css";

const Item = (props) => {
	return (
		<div className='item'>
			<p>{props.item}</p>
			{props.close == true ? <button onClick={() => props.removeItem(props.item)} className='close'>X</button> : null}
		</div>
	);
}

export default Item;