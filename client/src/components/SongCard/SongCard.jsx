import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import './songcard.css'

function SongCard({song}) {

  const queryClient = useQueryClient()

  const deleteSong = useMutation(() => 
   axios.delete(`http://localhost:5000/api/songs/${song.id}`),
   {onSuccess: () => {
    queryClient.invalidateQueries('allSongs')
   }})

  return (
    <div>
      <div className="">{song['Singer.name']} - {song.name}</div>
      <button onClick={() => deleteSong.mutate()} className="">Удалить песню</button>
    </div>
  );
}

export default SongCard;
