import React from "react";
import PropTypes from "prop-types";

const ProjectLabel = ({ title, subtitle }) => (
  <>
    <h4>{title}</h4>
    <span>{subtitle}</span>
  </>
);

ProjectLabel.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default ProjectLabel;
