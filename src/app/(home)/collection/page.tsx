"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillGrid3X3GapFill, BsListUl, BsFilterRight } from "react-icons/bs";
import { BiSolidGrid } from "react-icons/bi";
import ProductCard from "@/components/Collection Page/Product Card/ProductCard";
import { useOpenContext } from "@/context/OpenProvider";

interface CollectionProps {}

const Collection: React.FC<CollectionProps> = ({}) => {
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
    <div className={styles["collection-root"]}>
      <div className={styles["collection-container"]}>
        <div className={styles["collection-indicator"]}>
          Home
          <IoIosArrowForward
            style={{ marginLeft: "5px", marginRight: "5px" }}
          />
          Products
        </div>
        <div className={styles["collection-title"]}>Products</div>
        <div className={styles["collection-filter-container"]}>
          <div className={styles["filter-view"]}>
            <BiSolidGrid />
            <BsListUl />
          </div>
          <div className={styles["no-of-products"]}>18 products</div>
          <div className={styles["sort-by"]}>
            Sort by:
            <select name="" id="" className={styles["filter"]}>
              <option value="">Alphabetically, A-Z</option>
              <option value="">Featured</option>
              <option value="">Best Selling </option>
            </select>
          </div>
          <div className={styles["filter-word"]}>
            <BsFilterRight style={{ marginRight: "5px" }} /> Filter
          </div>
        </div>
        <ProductCard />
      </div>
    </div>
  );
};

export default Collection;
