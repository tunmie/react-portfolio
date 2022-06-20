import {useEffect, useState} from "react";
import "./Profile.css"

function Profile({userName}){
	const [loading,setLoading] = useState(false);
	const [profile, setProfile] = useState({})

	useEffect(() => {
		async function fetchData() {
			const profile = await fetch(`https://api.github.com/users/${userName}`);
			const result = await profile.json();

			if (result) {
				setProfile(true)
				setLoading(false)
			}
		}
		fetchData();
	}, [userName])

	return (
		<div className="Profile-container">
			<h2>About Me</h2>
			{loading ? (
				<span>Loading...</span>
			) : (
				<div>
					<img
						className="Profile-avatar"
						src={profile.avatar_url}
						alt={profile.name}
					/>
				<ul>
					<li><span>avatar_url: </span>
						{profile.avatar_url}
					</li>
					<li>
						<span>html_url: </span>
						{profile.html_url}
					</li>
					<li>
						<span>repos_url:</span>
						{profile.repos_url}
					</li>
					<li>
						<span>name: </span>
						{profile.name}
					</li>
					<li>
						<span>company: </span>
						{profile.company}
					</li>
					<li>
						<span>location: </span>
						{profile.location}
					</li>
					<li>
						<span>email: </span>
						{profile.email}
					</li>
				<li>
					<span>bio: </span>
					{profile.bio}
				</li>
				</ul>
				</div>
			)}
		</div>
	)
}

export default Profile