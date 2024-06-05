"use client";
import React from "react";
import "../News Card/newsCard.css";
import {
    BsCalendar,
    BsFillCalendarFill,
    BsFillPersonFill,
  } from "react-icons/bs";

const NewsCard = ({}) => {
  return (
    <div className="news-card-root">
      <div className="card-container">
        <div className="news-pic">
          <img
            src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1696496959/FabFinds%20Frontend/omar-lopez-rwF_pJRWhAI-unsplash_athgd0.jpg"
            alt=""
          />
        </div>
        <div className="news-card-title">Nunc In Ipsum Vel Laoreet</div>
        <div className="news-card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum
          obcaecati nemo sequi cum voluptatem quaerat excepturi, voluptatum
          autem quis fugiat eveniet. Aut ex sit unde fuga, quam ipsum assumenda.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          incidunt vel, laboriosam adipisci repudiandae provident tempora vero
          itaque illum error mollitia a totam eaque quos veniam distinctio eum,
          exercitationem facere.
        </div>
        <div className="news-card-bottom">
            <BsFillCalendarFill style={{ marginRight: "5px" }} /> Jun 07, 2023
            <BsFillPersonFill
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
            Hint Websolution
          </div>
      </div>
    </div>
  );
};

export default NewsCard;
