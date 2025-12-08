import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../../ constants/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  async function fetchData() {
    if (user) return;
    try {
      const res = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      });

      dispatch(addUser(res.data.user));
    } catch (error) {
      navigate("/login");
      // Navigate("/login")
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
