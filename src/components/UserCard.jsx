import { useHistory } from "react-router-dom";

export default function UserCard({
  avatar,
  name,
  age,
  occupation,
  username,
  showAge,
  showOccupation,
}) {
  let history = useHistory();
  const goToProfile = () => {
    history.push(`/users/${username}/profile`);
  };
  return (
    <div className="card ml-3" style={{ width: "18rem" }}>
      <img src={avatar} className="card-img-top" alt="User avatar" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {showAge && <span>Age: {age}</span>}
          <br />
          {showOccupation && <span>Occupation: {occupation}</span>}
        </p>
        <button className="btn btn-primary" onClick={goToProfile}>
          View profile
        </button>
      </div>
    </div>
  );
}
