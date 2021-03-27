import users from "../users.json";
import UserCard from "./UserCard";

export default function Users() {
  return (
    <div className="d-flex flex-wrap">
      {users.map((user) => (
        <UserCard {...user} key={user.username} />
      ))}
    </div>
  );
}
