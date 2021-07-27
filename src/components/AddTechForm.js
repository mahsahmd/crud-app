import { useState, useContext } from "react";
import { UserContext } from "./Provider";
import axios from "axios";

const AddTech = ({ hideAddTechs }) => {
  const [techName, setTechName] = useState("");
  const [techLastName, setTechLastName] = useState("");
  const { techs, fetchTechData } = useContext(UserContext);
  const last = techs.slice(-1).pop().id;
  const newId = last + 1;

  //* post new techs
  const addTech = async () => {
    await axios.post(`http://localhost:3000/techs`, {
      id: newId,
      name: techName,
      family: techLastName,
    });
  };
  // * add new tech
  const handleAddTech = async (event) => {
    event.preventDefault();
    if (techName.trim() === "" || techLastName.trim() === "") {
      alert("enter first and last name");
    } else {
      await addTech();
      await fetchTechData();
      hideAddTechs();
    }
  };
  return (
    <form className="editBox" onSubmit={handleAddTech}>
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => setTechName(event.target.value)}
      />
      <input
        type="text"
        placeholder="lastName"
        onChange={(event) => setTechLastName(event.target.value)}
      />
      <button className="editSubmitButton">submit</button>
    </form>
  );
};

export default AddTech;
