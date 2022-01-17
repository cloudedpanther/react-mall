import { useState, React, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function Details(props) {
  const history = useHistory();
  const { id } = useParams();
  const shoe = props.shoes.find((e) => e.id === Number(id));
  const [isAlert, changeIsAlert] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => changeIsAlert(false), 2000);
    return () => clearTimeout(timeOut);
  }, [isAlert]);
  return (
    <div className="container">
      {isAlert ? (
        <div className="my-alert">재고가 얼마 남지 않았습니다.</div>
      ) : null}
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
