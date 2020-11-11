import React from "react"
import styles from "./icons.module.css"

const Shadow = ({ label, showLabel, labelClass }) => {
  // const [labelVisible, setLabelVisible] = useState(false);
  // const labelClass = labelVisible ? styles.label : styles.none;

  // const showLabel = () => {
  //   console.log('hovering')
  //   setLabelVisible(true);
  // }

  return (
    <>
      <div className={styles.shadow} >
        <span className={labelClass}>{label}</span>
      </div>
    </>
  )
}

export default Shadow
