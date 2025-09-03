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
            <div className='accordion'>
                {items.map((item, index) => {
                    return <div key={index} className='accordion-item'>
                        <button
                            className='accordion-title'
                            onClick={() => { handleClick(index) }}
                        >{item.title}

                            {index === openIndex ? <FaChevronDown />
                                : <FaChevronUp />}
                        </button>
                        {openIndex === index && <div className='accordion-content'>{item.content}</div>}
                    </div>
                }
                )}
            </div>
        );
}

export default Accordion;