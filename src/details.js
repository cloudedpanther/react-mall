import { useState, React, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

function Details(props) {
  const history = useHistory();
  const { id } = useParams();
  const shoe = props.shoes.find((e) => e.id === Number(id));
  const [isAlert, changeIsAlert] = useState(true);
  const [tabNumber, changeTabNumber] = useState(0);
  const [tabSwitch, changeTabSwitch] = useState(false);

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
          <img
            src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.dispatch({
                type: "addToCart",
                payload: {
                  id: 2,
                  name: "quivering jeans",
                  quan: 11,
                  price: 59000,
                },
              });
              history.push("/cart");
            }}>
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}>
            뒤로가기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="/link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              changeTabSwitch(false);
              changeTabNumber(0);
            }}>
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              changeTabSwitch(false);
              changeTabNumber(1);
            }}>
            Option 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
      </Nav>

      <CSSTransition in={tabSwitch} classNames="tab" timeout={300}>
        <TabContent tabNumber={tabNumber} changeTabSwitch={changeTabSwitch} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.changeTabSwitch(true);
  });
  return (
    <div>
      <h4>{`${props.tabNumber}번째 내용입니다.`}</h4>
    </div>
  );
}

function stateToProps(state) {
  return {
    cartState: state.cartReducer,
  };
}

export default connect()(Details);
