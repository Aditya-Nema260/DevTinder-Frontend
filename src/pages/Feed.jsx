import React, { useEffect } from "react";
import Card from "../component/Card";
import { BASE_URL } from "../../ constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../features/feedSlice";
import axios from "axios";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);


  console.log(feedData)
  async function getFeed() {
    if (feedData) return;  //needs a check on this -----either clear on logout

    try {
      const res = await axios.get(`${BASE_URL}/user/feed`, {
        withCredentials: true,
      });
      console.log("FROM", res.data.users);

      dispatch(addFeed(res.data.users));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFeed();
  }, []);
  return (
    feedData && (
      <div>
        <Card user={feedData} forFeed= {true} />;
        {/* {feedData.map((d) => {
          return <Card user = {d} />;
        })} */}
      </div>
    )
  );
};

export default Feed;
