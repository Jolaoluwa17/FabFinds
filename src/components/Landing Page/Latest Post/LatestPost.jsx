"use client";
import React, { useEffect, useState, useRef } from "react";
import "./latestPost.css";
import {
  BsCalendar,
  BsFillCalendarFill,
  BsFillPersonFill,
} from "react-icons/bs";

const LatestPost = ({}) => {
  const [showSeeMore, setShowSeeMore] = useState(false);
  const postTextRef = useRef(null);

  useEffect(() => {
    const postText = postTextRef.current;

    const handleResize = () => {
      if (postText) {
        const { clientHeight, scrollHeight } = postText;
        setShowSeeMore(clientHeight < scrollHeight);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="latest-post-root">
      <div className="latest-post-title">Latest Post</div>
      <div className="latest-post-content">
        <div className="latest-post-card">
          <div className="post-img">
            <img
              src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1696496959/FabFinds%20Frontend/omar-lopez-rwF_pJRWhAI-unsplash_athgd0.jpg"
              alt=""
            />
          </div>
          <div className="post-header">
            <BsFillCalendarFill style={{ marginRight: "5px" }} /> Jun 07, 2023
            <BsFillPersonFill
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
            Hint Websolution
          </div>
          <div className="post-title">Nunc In Ipsum Vel Laoreet</div>
          <div className="post-text" ref={postTextRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum
            obcaecati nemo sequi cum voluptatem quaerat excepturi, voluptatum
            autem quis fugiat eveniet. Aut ex sit unde fuga, quam ipsum
            assumenda.
          </div>
          {showSeeMore && <div className="see-more-btn">See More</div>}
        </div>
        <div className="latest-post-card">
          <div className="post-img">
            <img
              src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1696496959/FabFinds%20Frontend/omar-lopez-rwF_pJRWhAI-unsplash_athgd0.jpg"
              alt=""
            />
          </div>
          <div className="post-header">
            <BsFillCalendarFill style={{ marginRight: "5px" }} /> Jun 07, 2023
            <BsFillPersonFill
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
            Hint Websolution
          </div>
          <div className="post-title">Nunc In Ipsum Vel Laoreet</div>
          <div className="post-text" ref={postTextRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum
            obcaecati nemo sequi cum voluptatem quaerat excepturi, voluptatum
            autem quis fugiat eveniet. Aut ex sit unde fuga, quam ipsum
            assumenda.
          </div>
          {showSeeMore && <div className="see-more-btn">See More</div>}
        </div>
        <div className="latest-post-card">
          <div className="post-img">
            <img
              src="https://res.cloudinary.com/dvv4wwuk1/image/upload/v1696496959/FabFinds%20Frontend/omar-lopez-rwF_pJRWhAI-unsplash_athgd0.jpg"
              alt=""
            />
          </div>
          <div className="post-header">
            <BsFillCalendarFill style={{ marginRight: "5px" }} /> Jun 07, 2023
            <BsFillPersonFill
              style={{ marginLeft: "5px", marginRight: "5px" }}
            />
            Hint Websolution
          </div>
          <div className="post-title">Nunc In Ipsum Vel Laoreet</div>
          <div className="post-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum
            obcaecati nemo sequi cum voluptatem quaerat excepturi, voluptatum
            autem quis fugiat eveniet. Aut ex sit unde fuga, quam ipsum
            assumenda.
          </div>
          <div className="see-more-btn">See More</div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
