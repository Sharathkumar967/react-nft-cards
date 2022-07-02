import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/common-section/CommonSection";
import "../styles/Wallet.css";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Lorem ipsum dolor, sit amet consecture adipisicing elit. Accusantiam accusams repelleat rerum consequatar explicabo? Reciendis!",
    icon: "ri-bit-coin-line",
  },
  {
    title: "Coinbase",
    desc: "Lorem ipsum dolor, sit amet consecture adipisicing elit. Accusantiam accusams repelleat rerum consequatar explicabo? Reciendis!",
    icon: "ri-coin-line",
  },
  {
    title: "Metamask",
    desc: "Lorem ipsum dolor, sit amet consecture adipisicing elit. Accusantiam accusams repelleat rerum consequatar explicabo? Reciendis!",
    icon: "ri-money-cny-circle-line",
  },
  {
    title: "Authereum",
    desc: "Lorem ipsum dolor, sit amet consecture adipisicing elit. Accusantiam accusams repelleat rerum consequatar explicabo? Reciendis!",
    icon: "ri-bit-coin-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect wallet" />
      <section>
        <Container className="mt-5 mb-5">
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi numquam blanditiis sunt provident distinctio quo!
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => {
              return (
                <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                  <div className="wallet__item">
                    <span>
                      <i class={item.icon}></i>
                    </span>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
