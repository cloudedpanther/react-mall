import { useState, React, createContext, useContext } from "react";
import axios from "axios";

let stockContext = createContext();

function Home(props) {
  const shoes = props.shoes;
  const changeShoes = props.changeShoes;
  const [stock, changeStock] = useState([10, 11, 12]);
  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3 background">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Custom jumbotron</h1>
          <p className="col fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>

      <div className="container">
        <stockContext.Provider value={stock}>
          <div className="row">
            {shoes.map((shoe, index) => {
              return <Card shoe={shoe} key={index} />;
            })}
          </div>
        </stockContext.Provider>

        <button
          className="btn btn-primary"
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((result) => {
                changeShoes([...shoes, ...result.data]);
              })
              .catch(() => console.log("error fetching data"));
          }}>
          더보기
        </button>
      </div>
    </div>
  );
}

function Card(props) {
  const stock = useContext(stockContext);
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${
          props.shoe.id + 1
        }.jpg`}
        width="100%"
        alt=""
      />
      <h4>{props.shoe.title}</h4>
      <p>{`${props.shoe.content} - $${props.shoe.price}`}</p>
      <Test></Test>
    </div>
  );
}

function Test() {
  const stock = useContext(stockContext);
  return (
    <div>
      <p>Stock: {stock[0]}</p>
    </div>
  );
}

export default Home;
