import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import './allsongs.css'
import SongCard from '../SongCard/SongCard';

function AllSongs(props) {

  const { search: query } = useLocation()
  const allSongsQuery = useQuery(`allSongs${query}`, () => axios({
    url: `http://localhost:5000/api/songs${query}`
  }), {
    cacheTime:
      query ? 0 : 2 * 60 * 1000
  })

  if (allSongsQuery.isLoading) {
    return (
      <div>Загрузка</div>
    )}

  if (allSongsQuery.isError) {
    return (
      <div>Ошибка</div>
    )}

  const songsList = allSongsQuery.data.data

  return (
    <div>
      {songsList.map(song => <SongCard key={song.id} song={song} />)}
    </div>
  );
}

export default AllSongs;
