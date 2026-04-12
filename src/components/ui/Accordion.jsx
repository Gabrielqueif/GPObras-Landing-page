import { useState } from "react";
import "./Accordion.css";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`accordion-item ${isOpen ? "open" : ""}`}
            onClick={() => toggleItem(index)}
          >
            <div className="accordion-header">
              <h3>{item.question}</h3>
              <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && (
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
