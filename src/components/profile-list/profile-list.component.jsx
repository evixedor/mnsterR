import Profile from "../profile/profile.component";
import "./profile-list.styles.css";

const ProfileList = ({ monsters }) => (
	<div className="profile-list">
		{monsters.map((monster) => {
			return (
				<Profile monster={monster} key={monster.id} /> 
			);
		})}
	</div>
);

export default ProfileList;
