import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { saveList } from '../store/ItemSlicer'
import { saveData } from '../store/DataSlicer'
import { useHistory } from 'react-router-dom';
import  useApi  from '../hooks/useApi';

import Additem from './Additem';
import Items from './Items';
import Item from './Item';
import './Todolist.css';

const Todolist = () => {
  const { data, loading, error } = useApi('https://www.therogerlab.com/examples/lists-stats.php');
  const history = useHistory();
  const dispatch = useDispatch();
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    if (data) {
      console.log('data api ==>',data);
      dispatch(saveData(data));
    }
  }, [data, dispatch]);

  const AddItem = () => {
    if (item) {
      setItems([...items, item]);
      console.log('add', items);
    }
  }

  const RemoveItem = (item) => {
    setItems(items.filter(i => i !== item));
    console.log('remove', items);
  }

  const handleSave = () => {
    if (items.length > 0) {
      dispatch(saveList(items));
    }
    history.push('/list');
  }

  useEffect(() => {

    setItemsList(items.map((item, index) => {
      return (
        <Item key={index} item={item} removeItem={RemoveItem} close={true}/>
      );
    }));

  }, [items]);

  return (
    <div className='container'>
      <div className="todolist">
        <Additem addItem={AddItem} item={item} setItem={setItem} handleSave={handleSave} />
        <Items items={itemsList} />
      </div>
    </div>
  );
}
export default Todolist;