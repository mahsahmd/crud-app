import { useState } from "react";
import TechList from "./TechList";
import AddTechForm from "./AddTechForm";

const Techs = () => {
 
  const [showTechs, setShowTechs] = useState(false);
  const [addTechs, setAddTechs] = useState(false);

  //* show techs
  const handleShowTechs = () => {
    setShowTechs(true);
  };
  //* hide techs
  const handleHideTechs = () => {
    setShowTechs(false);
  };
  //* hide add tech 
  const hideAddTechs = () => {
    setAddTechs(false)
  }
  return (
    <>
      {showTechs && <TechList handHideTechs={handleHideTechs} />}
      <button className="showTechs" onClick={handleShowTechs}>
        show techs
      </button>
      <button
        className="addTechs"
        onClick={() => {
          setAddTechs(true);
        }}
      >
        add techs
      </button>
      {addTechs && <AddTechForm hideAddTechs={hideAddTechs} />}
    </>
  );
};

export default Techs;
