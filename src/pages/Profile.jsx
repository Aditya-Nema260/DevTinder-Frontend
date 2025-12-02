import { useSelector } from "react-redux";

const Profile = () => {


  const user = useSelector(store => store.currentUser)
  console.log(user);
  
  return (
    <div className="h-[80vh]">
      <div className="card w-96 bg-base-100 card-xm shadow-sm">
        <div className="card-body ">
          <h2 className="card-title">Edit Info</h2>
          <input type="text" placeholder="FirstName" className="input" />
          <input type="text" placeholder="Last Name" className="input" />
          <input type="text" placeholder="Age" className="input" />
          <input type="text" placeholder="Email" className="input" />
          <input type="text" placeholder="Tech Stack" className="input" />
          <input type="text" placeholder="Gender" className="input" />
          <input type="text" placeholder="About" className="input" />
          <input type="text" placeholder="Image URL" className="input" />
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
