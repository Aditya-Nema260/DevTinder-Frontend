import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../ constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../features/connectionSlice";
import ConnectionsAndRequest from "../component/ConnectionsAndRequest";
const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();


  async function getConnections() {

    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.connections));
      console.log("FROM", res.data.connections);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getConnections();
  }, []);
  return connections && <div className="flex gap-3 wrap-normal ">

    {
      connections.map(connection => 
        <div ><ConnectionsAndRequest user = {connection}/></div>
      )
    }
  </div>;
};

export default Connections;
