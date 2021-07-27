import { useContext } from "react";
import LogItem from "./LogItem";
import { UserContext } from "./Provider";
import { useHistory } from "react-router-dom";

const List = () => {
  const { logs } = useContext(UserContext);
  let history = useHistory();

  return (
    <>
      <ul className="usersList">
        {logs.map((log, index) => (
          <LogItem key={index} log={log} />
        ))}
      </ul>

      <button onClick={() => history.push('/addLog')}>add log</button>
    </>
  );
};

export default List;
