import { Monster } from "../../App";

import "./profile.styles.css";

type CardProps = {
	monster: Monster;
};

const Profile = ({ monster }: CardProps) => {
	const { name, email, id } = monster;

	return (
		<div className="profile-container" key={id}>
			<img
				alt={`monster ${name}`}
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};
export default Profile;
