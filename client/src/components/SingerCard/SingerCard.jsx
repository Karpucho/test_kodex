import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import './singercard.css'

function SingerCard({singer}) {

  const queryClient = useQueryClient()

  const deleteSinger = useMutation(() => 
   axios.delete(`http://localhost:5000/api/singers/${singer.id}`),
   {onSuccess: () => {
    queryClient.invalidateQueries('allSingers')
    queryClient.invalidateQueries('allSongs')
   }})

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{singer.name}</h5>
        <button onClick={() => deleteSinger.mutate()} className="btn btn-primary">Удалить певца</button>
      </div>
    </div>
  );
}

export default SingerCard;
