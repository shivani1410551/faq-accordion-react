import  { useState } from 'react';

const AccordionTemplate = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => setExpanded(!expanded);

  return (
    <div className="accordion-item">
      <div className="accordion-header">
        <h3 className="question">{data.question}</h3>
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
            src={expanded ? "../../public/assets/images/icon-minus.svg" : '../../public/assets/images/icon-plus.svg'}
            alt={expanded ? 'Collapse' : 'Expand'}
          />
        </span>
      </div>
      {expanded && <div className="answer">{data.answer}</div>}
    </div>
  );
};

export default AccordionTemplate;
