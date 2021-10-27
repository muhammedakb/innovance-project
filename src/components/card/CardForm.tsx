import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCardAsync } from "../../stores/card";
// import { getProfileAsync } from "../../stores/profile";

interface Props {
  user?: string | undefined;
}

const CardForm = ({ user }: Props) => {
  const cardNo = Math.floor(
    100000000 + Math.random() * 9000000000000000
  ).toString();
  const cardId = Math.floor(100000000 + Math.random() * 900000000);

  const getToday = () => {
    let today: any = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    return today;
  };
  //   const holderName = useSelector((state: any) => state.profile.items);
  //   const holderRes = holderName.map((x: any) => x.name + " " + x.surname);

  const [form, setState] = useState({
    id: cardId,
    type: "",
    holder: "muhammet akbulut",
    no: cardNo,
    amount: 0,
    create: getToday(),
    expirationDate: "2025-10-25",
    maxTransferLimit: 20000,
    maxCredit: "",
    contactless: "",
  });

  const updateField = (e: any) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateFieldNumber = (e: any) => {
    setState({
      ...form,
      [e.target.name]: Number(e.target.value),
    });
  };

  const dispatch = useDispatch();
  const sendData = async (e: any) => {
    e.preventDefault();
    await dispatch(addCardAsync(form));
  };

  //   useEffect(() => {
  //     // profile name
  //     dispatch(getProfileAsync());
  //   }, [dispatch]);

  console.log(form);

  return (
    <div className="card-form">
      <form onSubmit={sendData}>
        <select name="type" id="type" onChange={updateField} required>
          <option value="">Card type</option>
          <option value="debit">Debit Card</option>
          <option value="credit">Credit Card</option>
        </select>

        {form.type === "credit" && (
          <input
            type="number"
            name="maxCredit"
            placeholder="Max Credit"
            min={5}
            max={250000}
            onChange={updateFieldNumber}
            required
          />
        )}

        <input
          type="text"
          placeholder="Max transfer limit : 20, 000 ₺"
          readOnly
        />

        <label htmlFor="contactless">
          Contactless :
          <input
            type="radio"
            name="contactless"
            id="contactless"
            value="true"
            onChange={updateField}
            required
          />{" "}
          Yes{" "}
          <input
            type="radio"
            name="contactless"
            id="contactless"
            value="false"
            onChange={updateField}
            required
          />{" "}
          No
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CardForm;
