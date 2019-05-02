import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Layout } from "../lib/components/Layout";
import { Hero } from "../lib/components/Hero";
import { MailChimpForm } from "../lib/components/MailChimpForm";
import { Subtitle, Title } from "../lib/components/Title";
import { Section } from "../lib/components/Section";
import { Icon } from "../lib/components/Icon";

const screenshots = [
  "/static/img/screenshots/stadium_1.png",
  "/static/img/screenshots/menu_1.png",
  "/static/img/screenshots/menu_2.png",
  "/static/img/screenshots/gameplay_1.png",
  "/static/img/screenshots/gameplay_2.png",
  "/static/img/screenshots/gameplay_3.png"
];

const ImageGrid = ({ images, ...props }) => {
  return (
    <div className="images" {...props}>
      {images.map((image, i) => {
        const imgSrc = typeof image === "string" ? image : image.src;
        return (
          <div className="screenshot" key={i}>
            <img src={imgSrc} className="img-fluid rounded" />
          </div>
        );
      })}
    </div>
  );
};

export default () => {
  return (
    <Layout pageTitle="Welcome">
      <Hero />
      <Section id="copy">
        <Container className="text-center">
          <Row className="mb-3">
            <Col md={{ size: 6, offset: 3 }}>
              <Title size="4">Let's Play Ball</Title>
              <p className="lead">
                Hot Routes: Virtual Football brings the fun and excitement of
                America's favorite game to a VR headset near you. Take the field
                and test your arm against an increasingly difficult set of
                routes.
              </p>
              <hr />

              <div className="images">
                <img
                  src="/static/img/logos/unity.png"
                  alt="Made with Unity"
                  className="img-fluid d-inline-block mx-3"
                />
                <img
                  src="/static/img/logos/vive.png"
                  alt="HTC Vive"
                  className="img-fluid d-inline-block mx-3"
                />
                <img
                  src="/static/img/logos/steam.png"
                  alt="Made with Steam VR"
                  className="img-fluid d-inline-block mx-3"
                />
              </div>

              <hr />

              <Subtitle priority="2" size="4" className="mb-3">
                Stay up to Date
              </Subtitle>

              <MailChimpForm url="https://twitter.us14.list-manage.com/subscribe/post?u=c995eaf6129ecf4b13d8ae469&id=dd2d98db0f" />
            </Col>
          </Row>
        </Container>
      </Section>

      <Section
        id="trailer"
        className="has-background lg text-white"
        style={{
          backgroundImage: `url(/static/img/screenshots/gameplay_3.png)`
        }}
      >
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube-nocookie.com/embed/SmtEFYRiVrw?rel=0&showinfo=0"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </Section>

      <Section id="screenshots">
        <Container className="container-narrow text-center">
          <Subtitle className="mb-3">Screenshots</Subtitle>
          <ImageGrid images={screenshots} />
        </Container>
      </Section>
    </Layout>
  );
};
