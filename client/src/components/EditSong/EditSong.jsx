import React, { useRef } from 'react';
import { useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

function EditSong(props) {

  const { id } = useParams()
  const singerRef = useRef()
  const songRef = useRef()
  const moneta = useRef()

  const queryClient = useQueryClient()
  const songQuery = useQuery(`song-${id}`, () => axios(`http://localhost:5000/api/songs/${id}`))
  const allSingersQuery = useQuery(`allSingers`, () => axios({
    url: `http://localhost:5000/api/singers`
  }))
  
  const saveSong = useMutation(() =>
    axios.put(`http://localhost:5000/api/songs/${id}`, {
      singer_id: singerRef.current.value,
      name: songRef.current.value,
    }), {
    onSuccess: (res) => {
      queryClient.invalidateQueries(`song-${id}`)
      moneta.status = 'Имя исполнителя изменено'
    },
    onError: (error) => {
      if (error.response.status === 400) {
        moneta.status = 'Пустое поле'
      }
    }
  })

  if (allSingersQuery.isLoading || songQuery.isLoading) {
    return (
      <div>Загрузка</div>
    )}

  if (allSingersQuery.isError || songQuery.isLoading) {
    return (
      <div>Ошибка</div>
    )}

  const allSingersInfo = allSingersQuery.data.data
  const songInfo = songQuery.data.data

  return (
    <div className="new_form">
    
    <form className = 'newSinger'>
      <div className="mb-3">
        <label className="form-label" htmlFor="singerName">
          <span>Имя певца: </span>
          <select className="form-select" ref={singerRef} name="singerName" id="singerName" defaultValue={songInfo['Singer.id']}>
            {allSingersInfo.map(singer => <option value={singer.id} key={singer.id}>{singer.name}</option>)}
          </select>
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="songName">
          <span>Название песни: </span> <br/>
          <input className="form-control" ref={songRef} type="text" name="songName" id="songName" defaultValue={songInfo.name} />
        </label>
      </div>

      <button onClick={(event) => {
        event.preventDefault();
        saveSong.mutate()
      }} className="btn btn-primary">Изменить песню</button>

      <div className="">{moneta.status}</div>
    </form>
  </div>
  );
}

export default EditSong;
