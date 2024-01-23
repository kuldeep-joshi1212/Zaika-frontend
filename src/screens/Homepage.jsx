import React from "react";
import "./Homepage.scss";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Homepage() {
  const props = {
    name: "burger king",
    rating: 4.2,
    cuisine: "fast-food",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOxySYAhLCdR_TLtd_8h-0lq-A8tNwTVEtQ&usqp=CAU",
    type: "VEG",
  };

  return (
    <div>
      <Navbar />
      <div className="board">
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />

      </div>
    </div>
  );
}
