import { React } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
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
          {props.cartState.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.quan}</td>
                <td>{e.price}</td>
                <td>
                  <button
                    onClick={() =>
                      props.dispatch({ type: "increaseQuantity" })
                    }>
                    +
                  </button>
                  <button
                    onClick={() =>
                      props.dispatch({ type: "decreaseQuantity" })
                    }>
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {props.alertState === true ? (
        <div className="my-alert">
          <h4>할인할 때 빨리 구매하세요.</h4>
          <button onClick={() => props.dispatch({ type: "closeAlert" })}>
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

function stateToProps(state) {
  return {
    cartState: state.cartReducer,
    alertState: state.alertReducer,
  };
}

export default connect(stateToProps)(Cart);
