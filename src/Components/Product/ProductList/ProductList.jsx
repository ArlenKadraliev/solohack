import { Pagination, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";
import Filter from "../../Filter/Filter";
import SideBar from "../../SideBar/SideBar";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

const ProductsList = () => {
  const { productsArr, readProduct, pageTotalCount } =
    useContext(productContext);
  const [paramsSearch, setParamsSearch] = useSearchParams();
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState([0, 50000]);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (category === "all") {
      setParamsSearch({
        price_gte: price[0],
        price_lte: price[1],
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 3,
      });
    } else {
      setParamsSearch({
        category: category,
        price_gte: price[0],
        price_lte: price[1],
        _page: page,
        _limit: 3,
      });
    }
  }, [category, price, page, paramsSearch]);

  useEffect(() => {
    readProduct();
  }, [paramsSearch, pageTotalCount]);

  return (
    <div style={open ? { width: "100%" } : null}>
      <div>
        <SideBar
          open={open}
          setOpen={setOpen}
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        />
      </div>

      <Filter
        category={category}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
      />

      <div>
        <div>
          {productsArr
            ? productsArr.map(item => (
                <div item={true} key={item.id}>
                  <ProductCard obj={item} />
                </div>
              ))
            : null}
        </div>
        <div>
          <Pagination
            count={pageTotalCount}
            color="secondary"
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
