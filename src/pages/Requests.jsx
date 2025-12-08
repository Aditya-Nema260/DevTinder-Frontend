import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../ constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../features/requestSlice";
import ConnectionsAndRequest from "../component/ConnectionsAndRequest";
const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  async function getRequests() {
    try {
      const res = await axios.get(`${BASE_URL}/user/requests`, {
        withCredentials: true,
      });

      const requests = res.data.requests;
      dispatch(addRequests(requests));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRequests();
  }, []);
  return (
    requests && (
      <div className="flex gap-3 wrap-normal ">
        {requests.map((request) => (
          <div key={request._id}>
            <ConnectionsAndRequest
              user={request.fromUserID}
              forRequests={true}
              id={request._id}
            />
          </div>
        ))}
        {requests.length === 0 ? "No Requests to show" : ""}
      </div>
    )
  );
};

export default Requests;
