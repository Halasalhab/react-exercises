import React from "react"
import { Link } from "react-router-dom"
import LeftNav from "../components/LeftNav"
import "../styles/primary.css"
import "../styles/profile.css"

const data = {
  me: {
    name: "React",
    Profile: {
      avatar: 'https://media.licdn.com/dms/image/C510BAQGyCfCQzGP_RA/company-logo_200_200/0/1519900931012?e=1703116800&v=beta&t=oJ9ep78QqteQCGPhd7yu5jrfTbbAgBhI-738h8-1Ouc',
      website: 'https://react.dev/'
    },
    Following: 10,
  }
}

function Profile({ userData = data }) {
  return (
    <>
      <div className="primary">
        <div className="left">
          <LeftNav />
        </div>
        <div className="profile">
          <div className="profile-info">
            <div className="profile-head">
              <span className="back-arrow">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </span>
              <span className="nickname">
                <h3>{userData.me.name}</h3>
              </span>
            </div>
            <div className="avatar">
              {userData.me.Profile?.avatar ? (
                <img
                  src={userData.me.Profile.avatar}
                  style={{ width: "150px", borderRadius: "50%" }}
                  alt="avatar"
                />
              ) : (
                <i className="fa fa-user fa-5x" aria-hidden="true"></i>
              )}
            </div>
            <h3 className="name">{userData.me.name}</h3>

            {userData.me.Profile ? (
              <p>
                <i className="fas fa-link"> </i>{" "}
                <Link
                  target="_blank"
                >
                  {userData.me.Profile.website}
                </Link>
              </p>
            ) : null}
            <div className="followers">
              <p>{userData.me.Following} Following</p>
              <p>384 Followers</p>
            </div>
          </div>
          {/* <LikedTweets tweets={userData.me} /> */}
        </div>
        <div className="right">
          {/* <PopularTweets/> */}
        </div>
      </div>
    </>
  )
}

export default Profile