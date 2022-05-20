import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

function SongCard({song}) {

  const queryClient = useQueryClient()

  const deleteSong = useMutation(() => 
   axios.delete(`http://localhost:5000/api/songs/${song.id}`),
   {onSuccess: () => {
    queryClient.invalidateQueries('allSongs')
   }})

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{song.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{song['Singer.name']}</h6>
        <button onClick={() => deleteSong.mutate()} className="btn btn-primary">Удалить песню</button>
      </div>
    </div>
  );
}

export default SongCard;
