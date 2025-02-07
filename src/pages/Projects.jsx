import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import tourBookingPortal from "../assets/projects/tourBookingPortal.png";
import audioLicensingPlatform from "../assets/projects/audioLicensingPlatform.png";
import fitnessApp from "../assets/projects/fitnessApp.png";
import legalPortal from "../assets/projects/legalPortal.png";
import ecommerceWebsite from "../assets/projects/ecommerceWebsite.png";
import universityWebsite from "../assets/projects/universityWebsite.png";
import bulkSmsProduct from "../assets/projects/bulkSmsProduct.png";
import fitnessPlatform from "../assets/projects/fitnessPlatform.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourBookingPortal}
              isBlog={false}
              title="Tour Booking Portal"
              description="Developed using Ruby on Rails on backend and ReactJS on frontend along with GraphQL and other technologies, Junglebee is a tour booking portal designed for all companies offering any kind of tour services. Once on board, Junglebee uses embedded buttons on tour operator's website(s) to show widgets that are connected to our syste on the backend. From there on onwards, Junglebee takes cares of created bookings, handling payments, notifications, emails etc.
I worked with them on contract basis for more than a year as a Full Stack Web developer / technical lead."
              // ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audioLicensingPlatform}
              isBlog={false}
              title="Audio Licensing Platform"
              description="Build with ReactJS and Ruby on Rails, Audiosocket is a platform designed to offer Audio, SFX and sounds licensing services to users. The app also ensures that there on no unlicensed usages of licensed tracks troughout Youtube. Bring your vision to life with access to over 85,000 songs and 25,000 sound effects used by the world’s biggest brands, influencers and top Hollywood studios. Your musical journey awaits."
              // ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnessApp}
              isBlog={false}
              title="Fitness App"
              description="Developed with Ruby on Rails and GrapeAPI. After a lifetime of working in corporate gyms, personal training studios, and owning health clubs, the founders had seen every side of the fitness industry. But despite their extensive experience, they felt frustrated and dissatisfied. They realized the key to a profitable fitness brand was to include customized desktop and mobile apps with premium features. So they set out to build their own. Their goal was to create a platform that made it easy to build powerful fitness training plans that inspired clients to improve."
              // ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bulkSmsProduct}
              isBlog={false}
              title="Bulk SMS Product"
              description="A shopify plugin developed with Ruby on Rails, YipSMS is helping businesses of all sizes achieve remarkable results. With personalized campaigns and smart automation, our users have recovered thousands in lost sales and increased customer engagement by over 30%. Set up automated SMS campaigns to send timely messages that nurture leads and increase sales."
              // ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnessPlatform}
              isBlog={false}
              title="Fitness Platform"
              description="Buildt using Wordpress, WPBakery, ContactForm7 etc. the vision at Primefit is to empower individuals to take control of their health and wellness through personalised coaching and support. We believe that everyone deserves access to the tools and resources they need to live a happy, healthy, and fulfilling life."
              // ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={legalPortal}
              isBlog={false}
              title="Legal Platform"
              description="Implemented with Ruby on Rails, StimulusJS and Docassemble, Funding Pro is an all in one solution to bring your legal documents from the physical to the electronic world. All kinds of legal documents can be generated with user data in real time and provided in PDF, Word etc. forms."
              // ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceWebsite}
              isBlog={false}
              title="E-Commerce Website"
              description="A Wordpress and Elementor project, Vezahra Removals is a simple website to introdcue users to Packers and movers service in the UK."
              // ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={universityWebsite}
              isBlog={false}
              title="University Website"
              description="Made using Wordpress and Elementor, this website introduces visitors to the various offerings of the Institute of Art and Culture in Lahore, Pakistan."
              // ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects