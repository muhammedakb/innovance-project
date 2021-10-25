import visa from "../icons/visa.png";

interface Props {
  type: string;
  name: string;
  number: string;
}

const index = ({ type, name, number }: Props) => {
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

export default index;
