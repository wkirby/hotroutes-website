import React from "react";
import { Container, Jumbotron } from "reactstrap";
import { LinkList } from "./LinkList";
import { Title } from "./Title";

export const Hero = props => {
  const socialLinks = [
    {
      href: "https://twitter.com/hotroutesgame",
      icon: "fa fa-twitter"
    },
    {
      href: "https://www.facebook.com/hotroutesgame",
      icon: "fa fa-facebook"
    },
    {
      href: "https://www.youtube.com/channel/UCamvS87Jk-Vp-EmbIy2sJ7A",
      icon: "fa fa-youtube-play"
    }
  ];

  return (
    <Jumbotron fluid className="jumbotron-hotroutes">
      <Container className="container-narrow text-center">
        <Title>
          <img
            src="/static/img/logo.png"
            alt="Hot Routes VR Football"
            className="img-fluid logo"
          />
        </Title>

        <LinkList links={socialLinks} className="social-icons" />
      </Container>
    </Jumbotron>
  );
};
