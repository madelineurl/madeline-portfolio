import React from "react";
import PropTypes from "prop-types";

const ProjectIcon = ({ image, name, handleClick, selected }) => {
  // const [showLabel, setShowLabel] = useState(false);
  // const labelClass = showLabel ? 'label' : 'hide';

  // const revealLabel = () => {
  //   setShowLabel(true);
  // };

  // const hideLabel = () => {
  //   setShowLabel(false);
  // };
  const selectedIcon = selected === name ? 'selected-icon flex' : 'flex';

  return (
    <button
      // onMouseOver={revealLabel}
      // onMouseLeave={hideLabel}
      // onFocus={revealLabel}
      onClick={() => handleClick(name)}
      className={selectedIcon}
    >
      <div>
        <img
          src={image}
          id={name}
          alt={`${name}-icon`}
        />
        {/* <div className={labelClass}>
          <h4>{labelTitle}</h4>
          <span>{labelSubtitle}</span>
        </div> */}
      </div>
    </button>
  );
};

ProjectIcon.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired
};

export default ProjectIcon;
