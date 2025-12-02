import React from "react";

const Card = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div
        data-theme="wireframe"
        className=" mt-6 card bg-base-300 w-96 shadow-sm "
      >
        <figure className="px-10 pt-10">
          <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR0bIMZ71HVeR5zF4PihQaDvTQQk6bsVERw&s"
            className="rounded object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Jhon Doe</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className=" flex gap-10 card-actions">
            <button className="btn bg-green-800">Interested</button>
            <button className="btn bg-red-700">Rejected</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
