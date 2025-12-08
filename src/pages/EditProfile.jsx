import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../ constants/constant";
import { editUser } from "../features/userSlice";

const EditProfile = () => {
  const [error, setError] = useState(null);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const {
    firstName,
    lastName,
    age,
    email,
    gender,
    about,
    imageUrl,
    techStack,
  } = user;

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email,
    age,
    techStack,
    gender,
    about,
    imageUrl,
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleEdit() {
    try {
      const { data } = await axios.patch(`${BASE_URL}/profile/edit`, formData, {
        withCredentials: true,
      });
      dispatch(editUser(formData));
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  }

  return (
    <div className="h-[80vh] p-9">
      <div className="card w-96 bg-base-300 card-xm shadow-sm">
        <div className="card-body ">
          {error && <p>{error}</p>}
          <h2 className="card-title">Edit Info</h2>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="FirstName"
            className="input"
          />
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="input"
          />
          <input
            name="age"
            onChange={handleChange}
            type="text"
            value={formData.age}
            placeholder="Age"
            className="input"
          />
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input"
          />
          <input
            name="techStack"
            type="text"
            value={formData.techStack}
            onChange={handleChange}
            placeholder="Tech Stack"
            className="input"
          />
          <input
            name="gender"
            type="select"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Gender"
            className="input"
          ></input>
          <input
            name="about"
            type="text"
            value={formData.about}
            onChange={handleChange}
            placeholder="About"
            className="input"
          />
          <input
            name="imageUrl"
            type="text"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="input"
          />
          <div className="justify-center card-actions">
            <button onClick={handleEdit} className="btn btn-primary">
              Confirm Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
