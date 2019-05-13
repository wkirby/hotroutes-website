import React from "react";
import { Container } from "reactstrap";
import screenshots from "../data/screenshots.yml";
import { Hero } from "../lib/components/Hero";
import { ImageGrid } from "../lib/components/ImageGrid";
import { Layout } from "../lib/components/Layout";
import { MailChimpForm } from "../lib/components/MailChimpForm";
import { Section } from "../lib/components/Section";
import { Subtitle, Title } from "../lib/components/Title";

import ImageZoom from "react-medium-image-zoom";

export default () => {
  return (
    <Layout pageTitle="Welcome">
      <Hero />
      <Section id="copy" className="section--football-helmet">
        <Container className="container-narrow text-center">
          <Subtitle>Having Problems?</Subtitle>
          <p className="lead" style={{ textAlign: 'justify' }}>
            We're here to help. We want everyone to enjoy the experience, so if something's gone wrong, we'll try get
            everything back on track.
          </p>

          <p className="lead" style={{ textAlign: 'justify' }}>
            You can either reach out to us on our discord below, or if you'd prefer use the contact form to send
            us an e-mail and we'll follow up that way.
          </p>
        </Container>
      </Section>

      <Section id="follow">
        <Container className="container text-center">
          <Subtitle>Choose Wisely</Subtitle>

          <div className="row">
            <div className="col-sm-5">
              <p class="lead">Fill out our cool form</p>
              <script type="text/javascript" src="https://s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget.js"></script>
              <style type="text/css" media="screen, projection">
                @import url(https://s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget.css);
              </style>
              <iframe title="Feedback Form" class="freshwidget-embedded-form" id="freshwidget-embedded-form" src="https://ncallaway.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded&submitThanks=Thank+you+for+your+feedback!+We'll+be+in+touch+shortly.+You+might+be+able+to+get+&screenshot=No&searchArea=no&captcha=yes" scrolling="no" height="500px" width="100%" frameborder="0" >
              </iframe>
            </div>

            <hr className="my-4 d-xs-block d-sm-none" />

            <div className="col-sm-5 offset-sm-2">
              <p class="lead">Message us on discord</p>
              <a className="logo-link" href="https://discord.gg/5WNHbpd" target="_blank">
                <img className="img-fluid" src="/static/img/logos/discord.svg" />
              </a>
            </div>
          </div>

        </Container>
      </Section>
    </Layout >
  );
};
