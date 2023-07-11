import React from 'react';
import './Dis.css';
import * as data from './Data.json';

function Dis() {
  const { users } = data.default;

  return (
    <div className='container'>
      {users.map((item, index) => (
        <div key={index} className='con'>
          <h1>{item.fullName}</h1>
          <br />
          <h3>{item.email}</h3>
          <h6>{item.age}</h6>
        </div>
      ))}
    </div>
  );
}

export default Dis;
