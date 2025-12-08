import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../ constants/constant";
import { removeUser } from "../features/userSlice";
import { clearFeed } from "../features/feedSlice";
import axios from "axios";
import toast from "not-a-toast"
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((store) => store.user);
  async function handleLogout() {
    try {
      await axios.post(
        `${BASE_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      dispatch(clearFeed())
      navigate("/login")
      toast({
        message: "Logged Out",
        duration: 2000,
        autoClose: true,
        progressBarColor: "#52a53b",
        pauseOnHover: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"> ☕ Devtinder</a>
      </div>
      {user && <div className="flex gap-2">
        <div className="flex items-center justify-center">
          <Link to={"/feed"} className="mr-5">Feed</Link>
          <Link to={"/requests"} className="mr-5">Requests</Link>
          <Link to={"/connections"} className="mr-5">Connections</Link>
          <p className="bg-purple-700 rounded-2xl pr-2 pl-2 font-medium">
            {`Welcome, ${user?.firstName}`}
          </p>
        </div>
        <div className="dropdown dropdown-end mx-4">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar  "
          >
            <div className="w-10 rounded-full ">
              {user && (
                <img alt="Tailwind CSS Navbar component" src={user?.imageUrl} />
              )}
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>}
    </div>
  );
};

export default Navbar;
