
import { AccordionData } from './AccordionData'
import AccordionTemplate from './AccordionTemplate'
const Accordion = () => {
  const heroAccordion = AccordionData.map((data ,index) => {
    return <AccordionTemplate data={data} key={data.question} isDefaultOpen={index===0}  />
  })
  return (
    <main className='accordion-main'>
      <div className="title">
        <img src="./images/icon-star.svg"  alt="icon-star" />
        <h1>FAQs</h1>
      </div>
{heroAccordion}
    </main>
  )
}

export default Accordion
