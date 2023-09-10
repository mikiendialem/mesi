import React from "react";
import './Dis.css'
import { users } from "./Data";

function Profile() {
  return(
    <div className="dis">
        {users.map((item) => (
          <div className="sec" key={item.id}>
            <h1>{item.fullName}</h1>
            <br />
            <h3>{item.age}</h3>
            <br />
            <h4>{item.country}</h4>
          </div>
        ))}
    </div>
  )
}
export default Profile;