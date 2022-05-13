import React from 'react';
import './songcard.css'

function SongCard({song}) {
  return (
    <div>
      <div className="">{song.name}</div>
    </div>
  );
}

export default SongCard;
