import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        style={{ maxHeight: "10rem", maxWidth: "15rem" }}
        src={props.imgSrc}
        alt="avatar_img"
      />
      <p>Tel: {props.tel}</p>
      <p>Mail: {props.mail}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      imgSrc="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+187513263"
      mail="be.beyonce@beyonceCO.com"
    />

    <Card
      name="Popola"
      imgSrc="https://xboxplay.games/uploadStream/16343.jpg"
      tel="+122474487139..."
      mail="popola_twin.town-library@projectgestalt.nier"
    />
  </div>,
  document.getElementById("root")
);
