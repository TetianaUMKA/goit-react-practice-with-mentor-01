import { IconContext } from "react-icons";

import styles from "./Statistics.module.css";

export const StatisticsItem = ({ itemTitle, total, icon }) => {
  return (
    <li className={styles.item}>
      <IconContext.Provider value={{ color: "2096f3", size: "30" }}>
        <div>{icon}</div>
      </IconContext.Provider>
      <span className={styles.counter}>{total}</span>
      <p className={styles.text}>{itemTitle}</p>
    </li>
  );
};
