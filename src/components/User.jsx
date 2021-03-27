import users from "../users.json";
import { parseQueryParameters } from "../utils/queryParams";
import UserCard from "./UserCard";

export default function User(props) {
  const { showOccupation, showAge } = parseQueryParameters(
    props.location.search
  );
  return (
    <UserCard
      {...users.find((u) => u.username === props.match.params.username)}
      showOccupation={showOccupation === "true"}
      showAge={showAge === "true"}
    />
  );
}
