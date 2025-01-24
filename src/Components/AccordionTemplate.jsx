import PropTypes from "prop-types";
const AccordionTemplate= ({ data ,index,handleSelection,selectedId}) => {

  return (
<div className="accordion-item" key={index}>
      {/* Accordion Header */}
      <div
        className="accordion-header"
        onClick={() => handleSelection(index)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleSelection(index);
        }}
        aria-expanded={selectedId === index}
        aria-label={selectedId === index ? `Collapse ${data.question}` : `Expand ${data.question}`}
      >
        <h2 className="question">{data.question}</h2>
        <span className="toggle-icon">
          <img
            src={selectedId === index ? "./images/icon-minus.svg" : "./images/icon-plus.svg"}
            alt={selectedId === index ? "Collapse" : "Expand"}
          />
        </span>
      </div>

      {/* Accordion Content */}
      {selectedId === index && <div className="answer">{data.answer}</div>}
    </div>
  );
};



AccordionTemplate.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
};

export default AccordionTemplate;




