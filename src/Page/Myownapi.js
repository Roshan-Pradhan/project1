import React, { useState, useEffect } from "react";
import axios from "axios";

const Myownapi = () => {
  const [localapi, setLocalapi] = useState([]);
  const getlocalobj = async () => {
    const localdata = await axios.get("http://localhost:8000/admin");
    console.log(localapi);
    setLocalapi(localdata.data);
  };

  useEffect(() => {
    getlocalobj();
  }, []);

  return (
    <div className="MyCard">
      <div className="cardHead">
        <div className="carBody">
          <h6> {localapi.sn}</h6>
          <h4>{localapi.fname}</h4>
          <h4>{localapi.age}</h4>
          <h4>{localapi.address}</h4>
        </div>
      </div>
    </div>
  );
};

export default Myownapi;
