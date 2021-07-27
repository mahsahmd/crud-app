import { UserContext } from "./Provider";
import { useContext } from "react";

const TechListItem = ({ tech: { id, name, family } }) => {

  const { deleteTech, fetchTechData } = useContext(UserContext);
  //* delete tech
  const handleDelete =async () => {
    await deleteTech(id);
    await fetchTechData();
  }
  return (
    <li className="user">
      <p>{id}</p>
      <p>{name}</p>
      <p>{family}</p>
      <button className="deleteTechs" onClick={handleDelete}>
        X
      </button>
    </li>
  );
};

export default TechListItem;
