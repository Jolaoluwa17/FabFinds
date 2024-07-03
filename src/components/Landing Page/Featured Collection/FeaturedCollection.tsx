"use client";

import "./featuredCollection.css";
import ProductCard from "@/components/Collection Page/Product Card/ProductCard";
import QuickView from "@/modals/quickview/QuickView";
import { useState } from "react";

const FeaturedCollection = () => {
  const [quickview, setQuickView] = useState(false);

  return (
    <div className="featuredCollection-root">
      <div className="featuredCollection-header">
        <h1>Featured Collection</h1>
      </div>
      <div className="featuredCollection-container">
        <ProductCard setQuickView={setQuickView} quickview={quickview} />
        <ProductCard setQuickView={setQuickView} quickview={quickview} />
        <ProductCard setQuickView={setQuickView} quickview={quickview} />
        <ProductCard setQuickView={setQuickView} quickview={quickview} />
      </div>
      <QuickView quickview={quickview} setQuickView={setQuickView} />
    </div>
  );
};

export default FeaturedCollection;
