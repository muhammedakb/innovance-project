import { Link } from "react-router-dom";
import { formatMoney } from "../../helpers/money-format/moneyFormat";

interface Props {
  id: React.Key | number | null | undefined;
  type: string | undefined;
  name?: string | undefined;
  number?: string | undefined;
  amount: number | undefined;
  create?: string | undefined;
  expirationDate?: string | undefined;
  maxTransferLimit?: number | undefined;
  credit?: boolean | undefined;
  maxCredit?: number | undefined;
  contactless?: boolean | undefined;
}

const index = ({ id, type, amount }: Props) => {
  return (
    <div className="account-balance">
      <Link
        to={`/cards/${id}`}
        className={`balance-box ${type === "debit" ? "debit" : "credit"}`}
      >
        <p className="balance-title">{type?.toLocaleUpperCase()} CARD</p>
        <span className="money">{formatMoney(amount)}</span>
        <span className="lira">₺</span>
      </Link>
    </div>
  );
};

export default index;
