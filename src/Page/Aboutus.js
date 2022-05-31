import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Index from "../Components/Nav";

const Aboutus = () => {
  const [apiex, setApiex] = useState([]);
  const func1 = async () => {
    const apiData = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // console.log(apiex.data);
    setApiex(apiData.data);
  };
  useEffect(() => {
    func1();
  }, []);

  return (
    <div className="MyCard">
      {apiex.map((details) => {
        return (
          <div className="cardHead">
            <div className="carBody">
              <h6> {details.id}</h6>
              <h3>{details.name}</h3>
              <h5>
                <span>Email: </span>
                {details.email}
              </h5>
              <h5>
                <span>Address: </span>
                {details.address.city + ", " + details.address.street}
              </h5>
              <h5>
                <span>Company: </span>
                {details.company.name}
              </h5>
              <h5>
                <span>Website: </span>
                {details.website}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Aboutus;
