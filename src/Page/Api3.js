import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row } from "antd";

const Api3 = () => {
  const [api3, setApi3] = useState([]);
  const api3Fun = async () => {
    const api3data = await axios.get("http://localhost:8000/admin3");
    setApi3(api3data.data);
  };
  useEffect(() => {
    api3Fun();
  });

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {api3.map((localapi, index) => {
          return (
            <Col span={8} key={index}>
              <Card className="antCard" title={localapi.title} bordered={false}>
                <p>{localapi.user}</p>
                <p>{localapi.password}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Api3;
