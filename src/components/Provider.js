import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const Provider = (props) => {
  const [logs, setLogs] = useState([]);
  const [techs, setTechs] = useState([]);

  //*fetch logs data
  const fetchData = async () => {
    await axios
      .get("http://localhost:3000/logs")
      .then((res) => {
        setLogs(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  //* delete log with id
  const deleteLog = async (id) => {
    await axios.delete(`http://localhost:3000/logs/${id}`);
  };

  //* fetch tech data
  const fetchTechData = async () => {
    await axios
      .get("http://localhost:3000/techs")
      .then((res) => {
        setTechs(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchTechData();
  }, []);

  //* delete tech with id
  const deleteTech = async (id) => {
    await axios.delete(`http://localhost:3000/techs/${id}`);
  };
  return (
    <UserContext.Provider
      value={{ logs, deleteLog, techs, deleteTech, fetchData, fetchTechData }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default Provider;
