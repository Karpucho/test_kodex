import React from 'react';
import './singercard.css'

function SingerCard({singer}) {
  return (
    <div>
      <div className="">{singer.name}</div>
    </div>
  );
}

export default SingerCard;
