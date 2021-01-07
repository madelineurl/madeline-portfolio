import React from "react";

const InfoTabs = ({ handleInfo, buttonText }) => {
  let values = [];

  for (let text in buttonText) {
    if (buttonText[text]) {
      values.push(text);
    }
  }

  return (
    <div className='info-btns flex'>
      {
        values.map(value => (
          <button key={value} onClick={() => handleInfo(value)}>
            {value.split(/(?=[A-Z])/).join(' ').toLowerCase()}
          </button>
        ))
      }
    </div>
  );
};

export default InfoTabs;
