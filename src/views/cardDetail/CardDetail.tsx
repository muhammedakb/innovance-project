import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Card from "../../components/card";
import Table from "../../components/table";
import useTitle from "../../hooks/useTitle";
import { BsTrash } from "react-icons/bs";
import "./style.scss";
import { removeCardAsync } from "../../stores/card";
import { useDispatch } from "react-redux";
import { succ } from "../../helpers/toast/toast";

interface Props {
  title: string;
}
interface IParams {
  id: string;
}
interface IDetail {
  id: number;
  type: string;
  holder: string;
  no: string;
  amount: number;
  create: string;
  expirationDate: string;
  maxTransferLimit: number;
  credit: boolean;
  maxCredit?: number;
  contactless: boolean;
}

const CardDetail: React.FC<Props> = ({ title }) => {
  useTitle(title);
  const dispatch = useDispatch();
  const { id }: IParams = useParams();
  const history = useHistory();
  const [detail, setDetail] = useState<IDetail>();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data } = await axios.get<IDetail>(
          `http://localhost:5000/cards/${id}`
        );
        setDetail(data);
      } catch {
        console.error("error");
      }
    };
    getDetail();
  }, [id]);

  const removeCard = async () => {
    if (window.confirm("Are you sure ?")) {
      await dispatch(removeCardAsync(id));
      await history.push("/cards");
      await succ("Kart başarıyla silindi !");
    }
  };
  return (
    <section className="card-detail">
      <div className="left">
        <Card type={detail?.type} name={detail?.holder} number={detail?.no} />
        <button onClick={removeCard}>
          Delete Card <BsTrash />
        </button>
      </div>

      <Table
        id={detail?.id}
        type={detail?.type}
        holder={detail?.holder}
        no={detail?.no}
        amount={detail?.amount}
        create={detail?.create}
        expirationDate={detail?.expirationDate}
        maxTransferLimit={detail?.maxTransferLimit}
        maxCredit={detail?.maxCredit}
        credit={detail?.credit}
        contactless={detail?.contactless}
      />
    </section>
  );
};

export default CardDetail;
