import AddNew from "./AddNew";

interface Props {}

const index = (props: Props) => {
  return (
    <div className="account-balance">
      <h3>Account Balance</h3>
      <main>
        <div className="balance-box">
          <p className="balance-title">Current Account</p>
          <span className="money">7,400</span>
          <span className="lira">₺</span>
        </div>
        <AddNew title="Add New Account" link="/accounts" />
      </main>
    </div>
  );
};

export default index;
