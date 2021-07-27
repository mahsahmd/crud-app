import axios from "axios";
import { useState,useContext } from "react";
import { UserContext } from "./Provider";


const EditLogForm = ({id,tech,msg,closeEdit}) => {
  const [msgEdit, setMsgEdit] = useState(msg);
  const [techEdit, setTechEdit] = useState(tech);
  const { fetchData } = useContext(UserContext);

  //* submit edit form
  const handleEditSubmit = async (event) => {
    event.preventDefault();
    if (msgEdit.trim() === "" || techEdit.trim() === "") {
      alert("enter message and tech name ");
    } else {
      const editedUser = {
        msg: msgEdit,
        tech: techEdit,
      };

      await axios.patch(`http://localhost:3000/logs/${id}`, editedUser);
      closeEdit();
      await fetchData();
    }
  };
  return (
    <form className="editBox" onSubmit={handleEditSubmit}>
      <input
        type="text"
        value={msgEdit}
        className="editMsgInput"
        onChange={(event) => setMsgEdit(event.target.value)}
      />
      <input
        type="text"
        value={techEdit}
        className="editTechInput"
        onChange={(event) => setTechEdit(event.target.value)}
      />
      <button className="editSubmitButton">submit</button>
    </form>
  );
};

export default EditLogForm;
