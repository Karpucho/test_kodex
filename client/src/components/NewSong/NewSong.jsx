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
      // if (error.response.status === 451) {
      //   moneta.status = 'ее нельзя'
      // }
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
    <form>

      <label htmlFor="singerName">
        <span>Имя  певца</span>
        <select ref={singerRef} name="singerName" id="singerName">
          {singersList.map(singer => <option value={singer.id} key={singer.id}>{singer.name}</option>)}
        </select>
      </label>

      <label htmlFor="songName">
        <span>Название песни</span>
        <input ref={newSongRef} type="text" name="songName" id="songName" className="" />
      </label>

      <button onClick={(event) => {
        event.preventDefault();
        addSong.mutate()
      }}>Добавить песню</button>
    </form>
  );
}

export default NewSong;
