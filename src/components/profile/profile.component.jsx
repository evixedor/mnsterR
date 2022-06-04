import "./profile.styles.css";

const Profile = ({ monster }) => {
	const { name, email, id } = monster;
  
	return (
		<div className="profile-container" key={id}>
			<img
				alt={`monster ${name}`}
				src={`https://robohash.org/${id}?set=set3&size=180x180`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};
export default Profile;
