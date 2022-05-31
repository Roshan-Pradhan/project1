import React, { useState, useEffect } from "react";
import axios from "axios";

const Myownapi = () => {
  const [localapi, setLocalapi] = useState([]);
  const getlocalobj = async () => {
    const localdata = await axios.get("http://localhost:8000/admin2");
    // console.log(localapi);
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
          <h3>{localapi.title}</h3>
          <h4>{localapi.post}</h4>
        </div>
      </div>
    </div>
  );
};

export default Myownapi;
