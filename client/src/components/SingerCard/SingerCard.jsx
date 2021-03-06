import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import './singercard.css'
import { useNavigate } from 'react-router-dom';

function SingerCard({singer}) {

  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const deleteSinger = useMutation(() => 
   axios.delete(`http://localhost:5000/api/singers/${singer.id}`),
   {onSuccess: () => {
    queryClient.invalidateQueries('allSingers')
    queryClient.invalidateQueries('allSongs')
   }})

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{singer.name}</h3>
        <button onClick={() => navigate(`/singers/edit/${singer.id}`)} className="btn btn-primary">Редактировать певца</button>
        <button onClick={() => deleteSinger.mutate()} className="btn btn-primary">Удалить певца</button>
      </div>
    </div>
  );
}

export default SingerCard;
