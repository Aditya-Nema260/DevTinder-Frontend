import React from "react";
import { useDispatch } from "react-redux";
import { removeFromFeed } from "../features/feedSlice";
import { BASE_URL } from "../../ constants/constant";
import axios from "axios"

const Card = ({ user, forFeed }) => {
  // console.log("USER:", user);

  console.log(user);

  if (!user) return null;

  const dispatch = useDispatch();

  if (user.length == 0) {
    return "No user to show";
  }
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
  } = user[0];
  console.log(user[0]);
  function handleInterested() {
    console.log(_id);
    dispatch(removeFromFeed(_id));
    axios.post(`${BASE_URL}/request/send/interested/${_id}`,null,{withCredentials: true});
  }
  function handleIgnored() {
    console.log(_id);
    dispatch(removeFromFeed(_id));
    axios.post(`${BASE_URL}/request/send/ignored/${_id}`,null,{withCredentials: true});
  }

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div data-theme="wireframe" className="card bg-base-300 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={
              imageUrl ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR0bIMZ71HVeR5zF4PihQaDvTQQk6bsVERw&s"
            }
            alt="profile"
            className="rounded-xl object-cover h-40 w-40"
          />
        </figure>

        <div className="card-body items-center text-center">
          {(firstName || lastName) && (
            <h2 className="card-title text-2xl font-bold">
              {firstName} {lastName}
            </h2>
          )}

          {about && <p className="text-sm opacity-80 mt-1">{about}</p>}

          {email && (
            <p className="text-sm font-medium mt-2">
              📧 <span>{email}</span>
            </p>
          )}

          {age && <p className="text-sm">🎂 Age: {age}</p>}

          {gender && <p className="text-sm">⚧ Gender: {gender}</p>}
          {techStack?.length > 0 && (
            <div className="mt-3">
              <p className="font-semibold mb-1">Tech Stack:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {typeof techStack === "string"
                  ? techStack.split(" ").filter(tech => tech).map((tech, i) => (
                      <span
                        key={i}
                        className="badge badge-primary badge-outline px-3 py-1"
                      >
                        {tech.trim()}
                      </span>
                    ))
                  : techStack.filter(tech => tech).map((tech, i) => (
                      <span
                        key={i}
                        className="badge badge-primary badge-outline px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
              </div>
            </div>
          )}
          {}

          {forFeed && (
            <div className="flex gap-6 card-actions mt-5">
              <button
                onClick={handleInterested}
                className="btn bg-green-700 text-white"
              >
                Interested
              </button>
              <button onClick={handleIgnored} className="btn bg-red-700 text-white">Ignore</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
