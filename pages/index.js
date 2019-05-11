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
          <Title size="4">Let's Play Ball</Title>
          <p className="lead" style={{ textAlign: 'justify' }}>
            Hot Routes: VR Football lets you put your arm to the test. Put on your <del>helmet</del> headset, step
            onto the field, and take on an ever-increasing set of challenges.
          </p>

          <p className="lead" style={{ textAlign: 'justify' }}>
            With two exciting modes (and more to
            come), Hot Routes VR Football will let you find out what you've always wanted to know: There's no way
            you're going pro.
          </p>
          <hr />

          <div className="images headset-logos text-center">
            <img
              src="/static/img/logos/oculus-vertical.png"
              alt="Oculus"
              className="img-fluid d-inline-block mx-3"
            />
            <img
              src="/static/img/logos/vive-vertical.png"
              alt="HTC Vive"
              className="img-fluid d-inline-block mx-3"
            />

          </div>
        </Container>
      </Section>

      <Section id="follow">
        <Container className="container-narrow text-center">
          <Subtitle>Stay up to Date</Subtitle>

          <div className="row">
            <div className="col-sm-5">
              <p class="lead">Sign up for the mailing list</p>
              <MailChimpForm url="https://twitter.us14.list-manage.com/subscribe/post?u=c995eaf6129ecf4b13d8ae469&id=dd2d98db0f" />
            </div>

            <hr className="my-4 d-xs-block d-sm-none" />

            <div className="col-sm-5 offset-sm-2">
              <p class="lead">Join us on discord</p>
              <a className="logo-link" href="https://discord.gg/ugTBaJ4" target="_blank">
                <img className="img-fluid" src="/static/img/logos/discord.svg" />
              </a>
            </div>
          </div>

        </Container>
      </Section>

      {/* <Section id="trailer" className="bg-light lg text-center">
        <Subtitle>Alpha Gameplay Trailer</Subtitle>
        <div className="embed-responsive embed-responsive-16by9 rounded mx-auto my-3" style={{maxWidth: 600}}>
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube-nocookie.com/embed/SmtEFYRiVrw?rel=0&showinfo=0"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </Section> */}

      <Section id="screenshots">
        <Container className="container-narrow text-center">
          <Subtitle>Screenshots</Subtitle>
          <ImageGrid images={screenshots} />
        </Container>
      </Section>

      <Section id="modes">
        <Container className="container-narrow text-center">
          <Subtitle>Two Exciting Modes</Subtitle>
          <div className="row">
            <div className="col-sm-6">
              <p className="lead">Hot Routes</p>
              <div className="screenshot mb-3">
                <ImageZoom image={{ src: "/static/img/screenshots/gameplay_7.png", className: "img-fluid rounded" }} />
              </div>
              <ul className="text-left">
                <li>Take the snap</li>
                <li>Throw to a receiver</li>
                <li>Rack up points by completing passes</li>
                <li>Three drops and you're done</li>
                <li>How long can you keep the streak alive?</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <hr className="my-4 d-xs-block d-sm-none" />
              <p className="lead">Time Attack</p>
              <div className="screenshot mb-3">
                <ImageZoom image={{ src: "/static/img/screenshots/gameplay_6.png", className: "img-fluid rounded" }} />
              </div>
              <ul className="text-left">
                <li>One minute on the clock</li>
                <li>Clear as many rings as you can</li>
                <li>Find the bonuses to keep the clock going</li>
                <li>Get multiple rings for big multipliers</li>
                <li>Can you climb the leaderboards?</li>
              </ul>
            </div>
          </div>
          <p className="lead mt-5">with more coming soon!</p>
        </Container>
      </Section>

      <Section id="versions" className="section--football-jersey">
        <Container className="container-narrow">
          <Subtitle className="text-center">Versions</Subtitle>

          <p className="lead">Hot Routes</p>
          <div className="d-flex justify-content-between align-items-center" >
            <ul style={{ maxWidth: '60%' }}>
              <li><strong>Devices:</strong> HTC Vive, Oculus Rift &amp; Rift S, Oculus Go</li>
              <li><strong>Planned:</strong> Valve Index, Oculus Quest</li>
              <li><strong>Stores:</strong> Steam, Oculus</li>
              <li><strong>Throw Styles:</strong> Realistic &amp; Arcade</li>
              <li><strong>Release Date:</strong> Early Access Q3 2019</li>
            </ul>

            <div className="d-flex flex-column align-items-end" style={{ opacity: 0.5 }}>
              <img src="/static/img/logos/device-htc-vive_sm.png" className="my-2" />
              <img src="/static/img/logos/device-oculus-rift_sm.png" className="my-2" />
              <img src="/static/img/logos/device-oculus-rift-s_sm.png" className="my-2" />
              <img src="/static/img/logos/device-oculus-quest_sm.png" className="my-4" style={{ opacity: 0.4 }} />
            </div>
          </div>

          <hr className="my-5" />

          <p className="lead">Hot Routes Arcade</p>
          <div className="d-flex justify-content-between">
            <ul style={{ maxWidth: '60%' }}>
              <li><strong>Devices:</strong> Oculus Go</li>
              <li><strong>Stores:</strong> Oculus</li>
              <li><strong>Throw Styles:</strong> Arcade</li>
              <li><strong>Release Date:</strong> Q2 2019</li>
              <li><strong>Accepting Alpha Testers now! <a href="https://discord.gg/XVwPMsh" target="_blank">Join our discord</a> if you'd like to get involved.</strong></li>
            </ul>

            <div className="d-flex flex-column align-items-end" style={{ opacity: 0.5 }}>
              <img src="/static/img/logos/device-oculus-go_sm.png" className="my-2" />
            </div>
          </div>

        </Container>
      </Section>

      <Section id="follow">
        <Container className="container-narrow text-center">
          <Subtitle>Did we mention?</Subtitle>

          <div className="row">
            <div className="col-sm-5">
              <p class="lead">Our mailing list</p>
              <MailChimpForm url="https://twitter.us14.list-manage.com/subscribe/post?u=c995eaf6129ecf4b13d8ae469&id=dd2d98db0f" />
            </div>

            <hr className="my-4 d-xs-block d-sm-none" />

            <div className="col-sm-5 offset-sm-2">
              <p class="lead">Our Discord</p>
              <a className="logo-link" href="https://discord.gg/ugTBaJ4" target="_blank">
                <img className="img-fluid" src="/static/img/logos/discord.svg" />
              </a>
            </div>
          </div>

        </Container>
      </Section>

    </Layout >
  );
};
