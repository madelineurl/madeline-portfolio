import React from "react";

const InfoTabs = ({ handleInfo, buttonText }) => {
  let values = [];

  for (let text in buttonText) {
    if (text !== '') {
      values.push(text);
    }
  }

  console.log(values);

  return (
    <div className='info-btns'>
      {
        values.map(value => (
          <button key={value} onClick={() => handleInfo(value)}>
            {value}
            {/* {value.split(/(?=[A-Z])/).toLowerCase()} */}
          </button>
        ))
      }
      {/* <button onClick={() => handleInfo('overview')}>overview</button>
      <button onClick={() => handleInfo('technology')}>technology</button>
      <button onClick={() => handleInfo('myRole')}>my role</button>
      <button onClick={() => handleInfo('keyTakeaways')}>key takeaways</button> */}
    </div>
  );
};

export default InfoTabs;
