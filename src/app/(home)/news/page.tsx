"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import { IoIosArrowForward } from "react-icons/io";
import NewsCard from "@/components/News Page/News Card/NewsCard";
import { useOpenContext } from "@/context/OpenProvider";

interface NewsProps {}

const News: React.FC<NewsProps> = ({}) => {
  const { open, setOpen } = useOpenContext();

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className={styles["news-root"]}>
      <div className={styles["news-container"]}>
        <div className={styles["news-indicator"]}>
          Home
          <IoIosArrowForward
            style={{ marginLeft: "5px", marginRight: "5px" }}
          />
          News
        </div>
        <div className={styles["news-title"]}>News</div>
        <div className={styles["news-content"]}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default News;
