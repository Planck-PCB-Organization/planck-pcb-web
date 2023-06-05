import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Layout from "./layout";
import Section from "./components/Section";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./components/Card";
import QuetoForm from "./pages/forms/QuetoForm";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <Section id="section-1">
        <Carousel
          autoPlay
          infiniteLoop
          transitionTime={1000}
          swipeable
          useKeyboardArrows
          showThumbs={false}
          swipeScrollTolerance={20}
          dynamicHeight
          axis="horizontal"
          centerMode={false}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index}>
              <img
                style={{
                  objectFit: "fill",
                  maxHeight: "540px",
                }}
                alt="carousel"
                src={`https://picsum.photos/seed/${index}/800/400`}
              />
            </div>
          ))}
        </Carousel>
        <Card className="card-form">
          <QuetoForm />
        </Card>
      </Section>
    </Layout>
  </React.StrictMode>
);
