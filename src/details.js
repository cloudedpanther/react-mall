import { useState, React } from "react";
import { useHistory, useParams } from "react-router-dom";

function Details(props) {
  const history = useHistory();
  const { id } = useParams();
  const shoe = props.shoes.find((e) => e.id === Number(id));
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={shoe.img} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}>
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
