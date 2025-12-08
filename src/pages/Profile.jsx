import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import Card from "../component/Card";

const Profile = () => {
  const user = useSelector((store) => store.user);
  console.log(user);

  return ( user &&
    <div className="flex justify-center gap-5 items-center">
    <EditProfile/>
    <Card user = {[user]}/>
    </div>
  )
};

export default Profile;
