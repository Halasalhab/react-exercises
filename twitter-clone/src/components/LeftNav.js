import React from "react"
import { Link } from "react-router-dom"
import "../styles/leftNav.css"
import favIcon from "../styles/assets/logo-black.png.twimg.1920.png"

function LeftNav() {
	return (
		<div>
			<Link>
				<img src={favIcon} alt="logo" style={{ width: "40px" }} />
			</Link>
			<Link>
				<h2>
					<i className="fa fa-home" aria-hidden="true" /> <span className="title">Home</span>
				</h2>
			</Link>
			<Link>
				<h2>
					<i className="fa fa-user" aria-hidden="true" /> <span className="title">Profile</span>
				</h2>
			</Link>
			<Link>
				<h2>
					<i className="fa fa-envelope" aria-hidden="true" /> <span className="title">Messages</span>
				</h2>
			</Link>
			<Link>
				<h2>
					<i className="fa fa-bell" aria-hidden="true" /> <span className="title">Notifications</span>
				</h2>
			</Link>
			<Link>
				<h2>
					<i className="fa fa-ellipsis-h" aria-hidden="true" /> <span className="title">More</span>
				</h2>
			</Link>
		</div>
	)
}

export default LeftNav