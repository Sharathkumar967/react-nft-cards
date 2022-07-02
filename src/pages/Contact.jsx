import React, { useRef } from "react";
import CommonSection from "../components/ui/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";
import "../styles/Contact.css";

const Contact = () => {
  
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <CommonSection title="contact" />
      <section>
        <Container className="mt-5 mb-5">
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Drop a message</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, quaerat rerum. Blanditiis repellendus aperiam est
                doloribus quo molestias! Quo, numquam?
              </p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      ref={nameRef}
                    />
                  </div>

                  <div className="form__input">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      ref={emailRef}
                    />
                  </div>

                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter subject"
                      ref={subjectRef}
                    />
                  </div>

                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder="Write message"
                      ref={messageRef}
                    ></textarea>
                  </div>
                  <button className="send__btn">Send a Message</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
