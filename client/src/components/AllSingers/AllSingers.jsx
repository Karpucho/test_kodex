import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import './allsingers.css'
import { useLocation } from 'react-router-dom';
import SingerCard from '../SingerCard/SingerCard';


function AllSingers(props) {

  const { search: query } = useLocation()
  const allSingersQuery = useQuery(`allSingers${query}`, () => axios({
    url: `http://localhost:5000/api/singers${query}`
  }), {
    cacheTime:
      query ? 0 : 2 * 60 * 1000
  })

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
    <div>
      {singersList.map(singer => <SingerCard key={singer.id} singer={singer} />)}
    </div>
  );
}

export default AllSingers;
