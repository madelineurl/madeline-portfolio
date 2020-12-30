import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./link.module.css";

const TemplateLink = ({ link, children }) => (
  <Link
    className={styles.link}
    to={link}>
      {children}
  </Link>
);

TemplateLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default TemplateLink;
