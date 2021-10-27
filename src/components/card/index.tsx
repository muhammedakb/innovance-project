import visa from "../icons/visa.png";
import "./card.scss";
interface Props {
  type: string | undefined;
  name: string | undefined;
  number: string | undefined;
  amount?: number | undefined;
  create?: string | undefined;
  expirationDate?: string | undefined;
  maxTransferLimit?: number | undefined;
  credit?: boolean | undefined | string;
  maxCredit?: number | undefined;
  contactless?: string | undefined;
}

const Card = ({
  type,
  name,
  number,
  amount,
  create,
  expirationDate,
  maxTransferLimit,
  credit,
  maxCredit,
  contactless,
}: Props) => {
  return (
    <div className={`card ${type === "debit" ? "debit" : "credit"}`}>
      <div className="head">
        <div className="head-left">{type}</div>
        <img src={visa} alt="" />
      </div>
      <div className="foot">
        <p className="user">{name}</p>
        <p className="card-no">{number}</p>
      </div>
    </div>
  );
};

export default Card;
