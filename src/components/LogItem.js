import { useContext, useState,useEffect } from "react";
import { UserContext } from "./Provider";
import EditLogForm from "./EditLogForm";

const ListItem = ({ log: { msg, tech, id, date } }) => {
  const { deleteLog, fetchData } = useContext(UserContext);
  const [edit, setEdit] = useState(false);
  
  useEffect(() => {
    fetchData();
  }, [])
  

  //* delete log
  const handleDelete = async () => {
    await deleteLog(id);
    await fetchData();
  };
  //* closeEdit
  const closeEdit = () => {
    setEdit(false)
  }

  return (
    <>
      <li className="user">
        <p>id:{id}</p>
        <p>msg:{msg}</p>
        <p>added by:{tech} </p>
        <p>date:{date}</p>
        <i className="fas fa-trash" onClick={handleDelete}></i>
        <button className="edit" onClick={() => setEdit(true)}>
          E
        </button>
      </li>

      {edit && <EditLogForm closeEdit={closeEdit} id={id} tech={tech} msg={msg}/>}
    </>
  );
};

export default ListItem;
