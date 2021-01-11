import React from "react";

const InfoTabs = ({ handleInfo, buttonText, selected }) => {
  const values = [];

  for (let text in buttonText) {
    if (buttonText[text]) {
      values.push(text);
    }
  }

  function splitJoinLowerCase(camelCaseWord) {
    return camelCaseWord.split(/(?=[A-Z])/).join(' ').toLowerCase();
  }

  return (
    <div id='info-btns' className='flex'>
      {
        values.map(value => (
          <button
            className={selected === value ? 'selected' : ''}
            key={value}
            onClick={() => handleInfo(value)}>
              {splitJoinLowerCase(value)}
          </button>
        ))
      }
    </div>
  );
};

export default InfoTabs;
