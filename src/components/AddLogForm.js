import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./Provider";
import { useHistory } from "react-router";


const AddLogForm = () => {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const { logs } = useContext(UserContext);
  const history = useHistory();
  const date = new Date().getFullYear();

  const last =logs.slice(-1).pop().id;
  console.log("last",last);
  const newLogId =last +1 ;
  const addLog = async () => {
    await axios.post(`http://localhost:3000/logs`, {
      id: newLogId,
      msg: msg,
      date: date,
      tech: name,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addLog();
    history.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="message"
        onChange={(event) => setMsg(event.target.value)}
      />
      <input
        type="text"
        placeholder="techName"
        onChange={(event) => setName(event.target.value)}
      />
      <button>submit</button>
    </form>
  );
};

export default AddLogForm;
