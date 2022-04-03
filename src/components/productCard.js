import React, { useEffect, useState } from "react";
import axios from "axios";
function productCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get("/api/products");
      const responseData = [...response.data.products];
      setData((previous) => (previous = responseData));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {data.map((item) => (
        <div>
          <img src={item.imageSrc} alt=" " />
        </div>
      ))}
    </div>
  );
}

export default productCard;
