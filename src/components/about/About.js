import React from 'react';
import './about.css';
import '../../index.css';

const About = () => {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="about_hero">
        {/* ABOUT HERO HEADER */}
        <div className="about_hero_header">
          <p className="about_hero_smallText">Our aim is to help you</p>
          <h1 className="about_hero_heading">Record every penny</h1>
        </div>
        {/* ABOUT HERO IMAGES */}
        <div className="about_hero_images">
          <span className="hero_image_text">
            <p>
              We specialize in accounting, bookkeeping, and tax consultancy
              activities with the exception of using our own developed simple to
              use, both online and offline application systems.
            </p>
          </span>
          <span className="hero_image_image">
            <img
              src="https://lens-website170952-staging.s3.amazonaws.com/images/about-hero-image.jpg"
              alt="About hero"
              id="about_hero_image"
              className="about_hero_image"
            />
          </span>
        </div>
      </section>
    </>
  );
};

export default About;
