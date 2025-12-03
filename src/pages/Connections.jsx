import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../ constants/constant";
const Connections = () => {
  async function getConnections() {
    // if (feedData) return;

    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
      console.log("FROM", res.data);

      //   dispatch(addFeed(res.data)); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getConnections();
  }, []);
  return <div>Connections</div>;
};

export default Connections;
