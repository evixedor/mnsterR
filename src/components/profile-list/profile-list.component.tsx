import { Monster } from "../../App";
import Profile from "../profile/profile.component";
import "./profile-list.styles.css";

type CardListProps = {
	monsters: Monster[];
};

const ProfileList = ({ monsters }: CardListProps) => (
	<div className="profile-list">
		{monsters.map((monster) => {
			return <Profile monster={monster} key={monster.id} />;
		})}
	</div>
);

export default ProfileList;
