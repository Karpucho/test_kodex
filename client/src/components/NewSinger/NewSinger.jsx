import React, { useRef } from 'react';
import axios from 'axios';
import './newsinger.css'
import { useMutation } from 'react-query';

function NewSinger(props) {

  const newSingerRef = useRef()
  const moneta = useRef()

  const addSinger = useMutation(() => 
   axios.post(`http://localhost:5000/api/singers`, {
     name: newSingerRef.current.value,
   }),
   {onSuccess: () => {
    newSingerRef.current.value =''
   },
    onError: (error) => {
      if (error.response.status === 451) {
        moneta.status = 'ее нельзя'
      }
      // добавить ошибку
    }})

  return (
    <form>
      <label htmlFor="name">Новый певец</label>
      <input ref={newSingerRef} type="text" name="name" id="name" className="" />
      <div className="">{moneta.status}</div>
      <button onClick={(event) => {
        event.preventDefault();
        addSinger.mutate()
      }}>Добавить певца</button>
    </form>
  );
}

export default NewSinger;
