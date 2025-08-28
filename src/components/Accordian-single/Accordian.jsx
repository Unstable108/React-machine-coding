import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './styles.css'

function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);
    const handleClick = (index) => {
        setOpenIndex(index == openIndex ? null : index);
    }
    return (!items || (items.length === 0)) ? "No items available"
        : (
            <div class='accordion'>
                {items.map((item, index) => {
                    return <div key={index} class='accordion-item'>
                        <button
                            class='accordion-title'
                            onClick={() => { handleClick(index) }}
                        >{item.title}

                            {index === openIndex ? <FaChevronDown />
                                : <FaChevronUp />}
                        </button>
                        {openIndex === index && <div class='accordion-content'>{item.content}</div>}
                    </div>
                }
                )}
            </div>
        );
}

export default Accordion;