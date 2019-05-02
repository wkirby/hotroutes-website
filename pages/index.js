import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Layout } from "../lib/components/Layout";
import { Hero } from "../lib/components/Hero";
import { MailChimpForm } from "../lib/components/MailChimpForm";
import { Subtitle, Title } from "../lib/components/Title";
import { Section } from "../lib/components/Section";
import { Icon } from "../lib/components/Icon";
import { ImageGrid } from "../lib/components/ImageGrid";

import screenshots from "../data/screenshots.yml";

export default () => {
  return (
    <Layout pageTitle="Welcome">
      <Hero />
      <Section id="copy">
        <Container className="container-narrow text-center">
          <Title size="4">Let's Play Ball</Title>
          <p className="lead">
            Hot Routes: Virtual Football brings the fun and excitement of
            America's favorite game to a VR headset near you. Take the field and
            test your arm against an increasingly difficult set of routes.
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

          <Subtitle priority="2" size="4">
            Stay up to Date
          </Subtitle>

          <MailChimpForm url="https://twitter.us14.list-manage.com/subscribe/post?u=c995eaf6129ecf4b13d8ae469&id=dd2d98db0f" />
        </Container>
      </Section>

      <Section id="trailer" className="bg-light lg text-center">
        <Subtitle>Alpha Gameplay Trailer</Subtitle>
        <div className="embed-responsive embed-responsive-16by9 rounded mx-auto my-3" style={{maxWidth: 600}}>
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
          <Subtitle>Screenshots</Subtitle>
          <ImageGrid images={screenshots} />
        </Container>
      </Section>
    </Layout>
  );
};