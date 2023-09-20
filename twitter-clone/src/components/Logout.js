import React from "react"
import "../styles/logOut.css"
const data ={
    me:{
        name: "Hala Salhab",
        Profile:{
            avatar: 'https://lh3.googleusercontent.com/ogw/AKPQZvzjltciL1ZiHF7BU8HZpxww0ZC6qcsE9CXKOECmgA=s32-c-mo'
        }
    }
}
export default function Logout({userData= data}) {
  return (
    <div className="logout">
      <span style={{ flex: 1, flexDirection: "row" }}>
        <h4>
          <img
            src={userData.me.Profile?.avatar}
            style={{ width: "40px", borderRadius: "50%" }}
            alt="avatar"
          />
          <span style={{ marginLeft: "10px", marginTop: "-10px" }}>
            {userData.me.name}
          </span>
          <span style={{ marginLeft: "30px" }}>
            <i className="fas fa-ellipsis-h"></i>
          </span>
        </h4>
      </span>
    </div>
  )
}