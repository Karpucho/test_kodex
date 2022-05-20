import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SongCard({song}) {

  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const deleteSong = useMutation(() => 
   axios.delete(`http://localhost:5000/api/songs/${song.id}`),
   {onSuccess: () => {
    queryClient.invalidateQueries('allSongs')
   }})

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{song.name}</h4>
        <h5 className="card-subtitle mb-2 text-muted">{song['Singer.name']}</h5>
        <button onClick={() => navigate(`/songs/edit/${song.id}`)} className="btn btn-primary">Редактировать песню</button>
        <button onClick={() => deleteSong.mutate()} className="btn btn-primary">Удалить песню</button>
      </div>
    </div>
  );
}

export default SongCard;
