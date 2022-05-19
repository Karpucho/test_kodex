import React, { useRef } from 'react';
import axios from 'axios';
import './newsinger.css'
import { useMutation } from 'react-query';

function NewSinger() {

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
      if (error.response.status === 444) {
        moneta.status = 'Исполнитель вне закона'
      }
      if (error.response.status === 400) {
        moneta.status = 'Пустое поле'
      }
    }})

  return (
    <div className="new_form">
      <form className='newSinger'>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Новый певец: </label>
            <br/> <input className="form-control" ref={newSingerRef} type="text" name="name" id="name" />
            <div id="emailHelp" className="form-text">{moneta.status}</div>
          </div>
            <button onClick={(event) => {
            event.preventDefault();
            addSinger.mutate()
          }} className="btn btn-primary">Добавить певца</button>
      </form>
    </div>
  );
}

export default NewSinger;
