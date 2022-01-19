import { React } from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart() {
  const cartState = useSelector((state) => state.cartReducer);
  const alertState = useSelector((state) => state.alertReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {cartState.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.quan}</td>
                <td>{e.price}</td>
                <td>
                  <button
                    onClick={() => dispatch({ type: "increaseQuantity" })}>
                    +
                  </button>
                  <button
                    onClick={() => dispatch({ type: "decreaseQuantity" })}>
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {alertState === true ? (
        <div className="my-alert">
          <h4>할인할 때 빨리 구매하세요.</h4>
          <button onClick={() => dispatch({ type: "closeAlert" })}>닫기</button>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
