import React, { useState, useEffect } from "react";

const Contactus = () => {
  const [data, setData] = useState("");
  const [dataAddress, setDataAddress] = useState("");
  const [dataPhone, setDataPhone] = useState("");

  // useEffect(() => {
  //   console.log("apple");
  // }, []);

  const changeHandler = (e) => {
    setData(e.target.value);
    console.log(data);
    setDataAddress(e.target.value);
    console.log(dataAddress);
    setDataPhone(e.target.value);
    console.log(dataPhone);
  };

  return (
    <div className="container">
      <form action="">
        <h5>Contact us page</h5>
        <h4>Enter Your name</h4>
        <input
          type="text"
          name=""
          id=""
          value={data}
          placeholder="Enter Your name"
          onChange={changeHandler}
        />
        <h4>Enter Your address</h4>
        <input
          type="text"
          name=""
          placeholder="Enter Your address"
          value={dataAddress}
          onChange={changeHandler}
        />
        <h4>Enter Your phonenumber</h4>
        <input
          type="number"
          name=""
          id=""
          placeholder="Enter Your Phonenumber"
          value={dataPhone}
          onChange={changeHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contactus;
