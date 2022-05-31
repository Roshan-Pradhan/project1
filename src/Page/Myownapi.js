import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row } from "antd";

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
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {localapi.map((localapi, index) => {
          return (
            <Col span={8} key={index}>
              <Card className="antCard" title={localapi.fname} bordered={false}>
                <p>{localapi.age}</p>
                <p>{localapi.address}</p>
                <p>{localapi.email}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Myownapi;
