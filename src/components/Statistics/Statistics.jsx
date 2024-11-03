import { FaRegThumbsUp } from "react-icons/fa";
import { MdPeople, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiTreeDoor } from "react-icons/gi";
import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
import styles from "./Statistics.module.css";

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ title, data }) => {
  return (
    <>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {data.map(({ id, title, total }, index) => (
          <StatisticsItem
            key={id}
            itemTitle={title}
            total={total}
            icon={icons[index]}
          />
        ))}
      </ul>
    </>
  );
};
