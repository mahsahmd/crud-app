import TechListItem from "./TechListItem";
import { UserContext } from "./Provider";
import { useContext } from "react";



const TechList = ({handHideTechs}) => {
  const {techs} = useContext(UserContext);

  return (
    <ul className="usersList">
      <button className="hideTechs" onClick={handHideTechs}>
        X
      </button>
      {techs.map((tech, index) => (
        <TechListItem key={index} tech={tech} />
      ))}
    </ul>
  );
};

export default TechList;
