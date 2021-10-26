import React from "react";
// import { Link } from "react-router-dom";
import "./table.scss";
import { BsCheck2Square } from "react-icons/bs";
import { RiForbid2Fill } from "react-icons/ri";
import { formatMoney } from "../../helpers/money-format/moneyFormat";

interface Props {
  id: number | undefined;
  type: string | undefined;
  holder: string | undefined;
  no: string | undefined;
  amount: number | undefined;
  create: string | undefined;
  expirationDate: string | undefined;
  maxTransferLimit: number | undefined;
  credit: boolean | undefined;
  maxCredit?: number | undefined;
  contactless: boolean | undefined;
}

const Table = ({
  id,
  type,
  holder,
  no,
  amount,
  create,
  expirationDate,
  maxTransferLimit,
  credit,
  maxCredit,
  contactless,
}: Props) => {
  return (
    <table className="card-detail">
      <tr>
        <th className={`${type === "debit" ? "debitTh" : "creditTh"}`}>
          card information
        </th>
        <th className={`${type === "debit" ? "debitTh" : "creditTh"}`}>
          value
        </th>
      </tr>
      <tr>
        <td>id</td>
        <td>{id}</td>
      </tr>
      <tr>
        <td>type</td>
        <td>{type}</td>
      </tr>
      <tr>
        <td>holder</td>
        <td>{holder}</td>
      </tr>
      <tr>
        <td>no</td>
        <td>{no}</td>
      </tr>
      <tr>
        <td>amount</td>
        <td>{formatMoney(amount)} ₺</td>
      </tr>
      <tr>
        <td>create</td>
        <td>{create}</td>
      </tr>
      <tr>
        <td>expiration date</td>
        <td>{expirationDate}</td>
      </tr>
      <tr>
        <td>max transfer limit</td>
        <td>{formatMoney(maxTransferLimit)} ₺</td>
      </tr>
      <tr>
        <td>credit</td>
        <td>
          {credit ? (
            <BsCheck2Square color={"#09ae07"} />
          ) : (
            <RiForbid2Fill color={"#D0342C"} />
          )}
        </td>
      </tr>
      <tr>
        <td>max credit</td>
        <td>
          {maxCredit ? (
            formatMoney(maxCredit) + " ₺"
          ) : (
            <RiForbid2Fill color={"#D0342C"} />
          )}
        </td>
      </tr>
      <tr>
        <td>contactless</td>
        <td>
          {contactless ? (
            <BsCheck2Square color={"#09ae07"} />
          ) : (
            <RiForbid2Fill color={"#D0342C"} />
          )}
        </td>
      </tr>
    </table>
  );
};

export default Table;
