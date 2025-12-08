import axios from "axios";
import { removeFromRequest } from "../features/requestSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../ constants/constant";
const ConnectionsAndRequest = ({ id, user, forRequests }) => {
  console.log(user, id);

  const dispatch = useDispatch();

  const {
    firstName,
    lastName,
    email,
    age,
    techStack,
    gender,
    about,
    imageUrl,
    _id,
  } = user;

  console.log(firstName);

  function handleAccepted() {
    console.log(_id);
    dispatch(removeFromRequest(id));
    axios.post(`${BASE_URL}/request/response/accepted/${id}`, null, {
      withCredentials: true,
    });
  }
  function handleRejected() {
    console.log(_id);
    dispatch(removeFromRequest(id));
    axios.post(`${BASE_URL}/request/response/rejected/${id}`, null, {
      withCredentials: true,
    });
  }

  return (
    <>
      <div className="card bg-base-200 w-72 mt-2  shadow-lg">
        <figure className="p-3">
          <img src={imageUrl} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
          <p>{email}</p>
          {forRequests && (
            <div className="flex gap-2">
              <button
                onClick={handleAccepted}
                className="btn btn-sm btn-soft btn-success"
              >
                Accept
              </button>
              <button
                onClick={handleRejected}
                className="btn btn-sm btn-soft btn-error"
              >
                Reject
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ConnectionsAndRequest;
