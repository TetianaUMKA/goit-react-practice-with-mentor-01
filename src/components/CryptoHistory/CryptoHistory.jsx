import formatDate from "helpers/formatDate";

import style from "./CryptoHistory.module.css";

const tableHeaders = ["№", "price", "amount", "date"];

export const CryptoHistory = ({ data }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map((item, i) => (
            <th className={style.th} key={i}>
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map(({ id, price, amount, date }, index) => (
          <tr className={style.tr} key={id}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{formatDate(date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
