import React, { useRef } from 'react';
import { useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import axios from 'axios'
import './editsinger.css'

function EditSinger() {

  const { id } = useParams()
  const queryClient = useQueryClient()
  const singerName = useRef()
  const moneta = useRef()
  const singersQuery = useQuery(`singers-${id}`, () => axios(`http://localhost:5000/api/singers/${id}`))
  
  const saveSinger = useMutation(() =>
    axios.put(`http://localhost:5000/api/singers/${id}`, {
      name: singerName.current.value
    }), {
    onSuccess: (res) => {
      queryClient.invalidateQueries(`singers-${id}`)
      moneta.status = 'Имя исполнителя изменено'
    },
    onError: (error) => {
      if (error.response.status === 444) {
        moneta.status = 'Исполнитель вне закона'
      }
      if (error.response.status === 400) {
        moneta.status = 'Пустое поле'
      }
    }
  })

  if (singersQuery.isLoading) {
    return (
      <div>Загрузка</div>
    )}

  if (singersQuery.isError) {
    return (
      <div>Ошибка</div>
    )}

  const singerInfo = singersQuery.data.data

  return (
    <form className="editSinger">

      <div className="mb-3">
        <label htmlFor="singerName" className="form-label">Новое имя певца:</label>
        <input type="text" ref={singerName}
          name="singerName" id="singerName"
          className="form-control" defaultValue={singerInfo.name} />
      </div>

      <button onClick={(event) => {
        event.preventDefault();
        saveSinger.mutate()
        }} className="btn btn-primary">Изменить</button>

      <div className="form-text">{moneta.status}</div>
    </form>
  );
}

export default EditSinger;
