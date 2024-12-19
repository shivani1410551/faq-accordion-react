import React from 'react'
import iconStar from "../../public/assets/images/icon-star.svg"
import { AccordionData } from './AccordionData'
import AccordionTemplate from './AccordionTemplate'
const Accordion = () => {
  const heroAccordion = AccordionData.map((data) => {
    return <AccordionTemplate data={data} key={data.question} />
  })
  return (
    <main className='accordion-main'>
      <div className="title">
        <img src={iconStar }  alt="icon-star" />
        <h1>FAQs</h1>
      </div>
{heroAccordion}
    </main>
  )
}

export default Accordion
