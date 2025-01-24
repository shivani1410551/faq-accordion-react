import { useState } from "react";
import { AccordionData } from "./AccordionData";
import AccordionTemplate from "./AccordionTemplate";
const Accordion= () => {
  const [selectedId, setSelectedId] = useState(0);

  const handleSelection = (currentId) => {
    setSelectedId(selectedId === currentId ? null : currentId);
  };

  const heroAccordion = AccordionData.map((data, index) => (
    <AccordionTemplate data={data} index={index} key={index}  handleSelection={handleSelection} selectedId={selectedId }  />
  ));

  return (
    <main className="accordion-main">
      {/* Title Section */}
      <div className="title">
        <img src="./images/icon-star.svg" alt="icon-star" />
        <h1>FAQs</h1>
      </div>
      {heroAccordion}
    </main>
  );
};

export default Accordion;




