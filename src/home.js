import { useState, React } from "react";

function Home(props) {
  const shoes = props.shoes;
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
        <div className="row">
          {shoes.map((shoe, index) => {
            return <Card shoe={shoe} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={props.shoe.img} width="100%" alt="" />
      <h4>{props.shoe.title}</h4>
      <p>{`${props.shoe.content} - $${props.shoe.price}`}</p>
    </div>
  );
}

export default Home;
