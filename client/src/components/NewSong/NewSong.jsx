import React, { useRef } from 'react';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import './newsong.css'

function NewSong() {

  const newSongRef = useRef()
  const singerRef = useRef()
  const moneta = useRef()

  const allSingersQuery = useQuery(`allSingers`, () => axios({
    url: `http://localhost:5000/api/singers`
  }))

  const addSong = useMutation(() => 
   axios.post(`http://localhost:5000/api/songs`, {
     name: newSongRef.current.value,
     singer_id: singerRef.current.value,
   }),
   {onSuccess: () => {
    newSongRef.current.value =''
    singerRef.current.value =''
   },
    onError: (error) => {
      if (error.response.status === 400) {
        moneta.status = 'Пустое поле'
      }
    }})

  if (allSingersQuery.isLoading) {
    return (
      <div>Загрузка</div>
    )}

  if (allSingersQuery.isError) {
    return (
      <div>Ошибка</div>
    )}

  const singersList = allSingersQuery.data.data

  return (
    <form className = 'newSinger'>
      <div className="mb-3">
        <label className="form-label" htmlFor="singerName">
          <span>Имя певца: </span>
          <select className="form-select" ref={singerRef} name="singerName" id="singerName">
            {singersList.map(singer => <option value={singer.id} key={singer.id}>{singer.name}</option>)}
          </select>
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="songName">
          <span>Название песни: </span> <br/>
          <input className="form-control" ref={newSongRef} type="text" name="songName" id="songName" />
        </label>
      </div>

      <div className="">{moneta.status}</div>

      <button onClick={(event) => {
        event.preventDefault();
        addSong.mutate()
      }} className="btn btn-primary">Добавить песню</button>
    </form>
  );
}

export default NewSong;
