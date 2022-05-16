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
    <div>
      <div className="">{singer.name}</div>
      <button onClick={() => deleteSinger.mutate()} className="">Удалить певца</button>
    </div>
  );
}

export default SingerCard;
