import  { useState } from 'react';

const AccordionTemplate = ({ data ,isDefaultOpen }) => {
  const [expanded, setExpanded] = useState(isDefaultOpen);

  const toggleAccordion = () => setExpanded(!expanded);

  return (
    <div className="accordion-item">
      <div className="accordion-header">
        <h2 className="question">{data.question}</h2>
        <span
          className="toggle-icon"
          onClick={toggleAccordion}
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleAccordion();
          }}
        >
          <img
            src={expanded ? "./images/icon-minus.svg" : "./images/icon-plus.svg"}
            alt={expanded ? 'Collapse' : 'Expand'}
          />
        </span>
      </div>
      {expanded && <div className="answer">{data.answer}</div>}
    </div>
  );
};

export default AccordionTemplate;
