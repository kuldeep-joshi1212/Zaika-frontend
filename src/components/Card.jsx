import React, { useState } from "react";
import "./Card.scss";
export default function Card(props) {
  let capitalizeEachWord = (str) => {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  };
  props = JSON.parse(JSON.stringify(props));
  props.name = capitalizeEachWord(props.name);
  props.cuisine = capitalizeEachWord(props.cuisine);
  return (
    <>
      <div className="card">
        <div className="image">
          <img className="display-picture" src={props.photo} />
        </div>
        <div className="details-cnt">
          <div>
            <p>{capitalizeEachWord("burger king")}</p>
            <p>{props.rating}</p>
          </div>
          <div className="type">
            <p>{props.cuisine}</p>
            <i class="fa-solid fa-leaf"></i>
          </div>
        </div>
      </div>
    </>
  );
}
