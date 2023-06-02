import React from 'react';
import './about.css';
import '../../index.css';
import { s3_bucket } from '../../helpers/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <div className="about_container">
      {/* ABOUT HERO */}
      <section className="about_hero">
        {/* ABOUT HERO HEADER */}
        <div className="about_hero_header">
          <p className="about_hero_smallText">Our aim is to help you</p>
          <h1 className="about_hero_heading">Record every penny</h1>
        </div>
        {/* ABOUT HERO IMAGES */}
        <div className="about_hero_images">
          <img
            src={`${s3_bucket}/images/about-hero-image.png`}
            id="about_hero_image"
            alt="About hero graphic"
          />
        </div>
      </section>
      {/* ABOUT US */}
      <section className="about_us">
        <h2>
          At Lens, we build user-friendly tools that help individuals and
          businesses keep track of their transactions as simply (or complex) as
          they like.
        </h2>
        <button className="about_us_button">
          {' '}
          Get Started <FontAwesomeIcon icon="fa-solid fa-arrow-right" />{' '}
        </button>
      </section>
      {/* ABOUT NICHE */}
      <section className="about_niche">
        <div className="about_niche_header">
          <p>
            Lens was created by a team of talented individuals from different
            industries to simplify the tedious bookkeeping process as much as
            possible.
          </p>
          <h2>But where did we start:</h2>
        </div>
        {/* ABOUT NICHE PRODUCT */}
        <div className="about_niche_products">
          {/* ABOUT NICHE PRODUCT - UMUHINZI */}
          <div className="about_niche_product umuhinzi">
            <p className="niche_product_sector">Agribusiness</p>
            <h3 className="niche_product_description">
              <span className="niche_product_name">Umuhinzi App</span>
              is helping 300+ farmers keep track of all transactions while
              getting timely reports
            </h3>
            <a
              className="niche_product_button"
              target="_blank"
              rel="noreferrer"
              href="https://www.accounts.lens.rw"
            >
              Learn More
            </a>
          </div>
          {/* ABOUT NICHE PRODUCT - NYIBUTSA */}
          <div className="about_niche_product nyibutsa">
            <p className="niche_product_sector">Personal Finance</p>
            <h3 className="niche_product_description">
              <span className="niche_product_name">Nyibutsa</span>
              protects your integrity (and finances) with effective debt
              management and customized reports.
            </h3>
            <a
              className="niche_product_button"
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.tusifuedison.nyibutsa"
            >
              Download App
            </a>
          </div>
        </div>
      </section>
      {/* ABOUT TEAM */}
      <section className="about_team">
        <div className="about_team_header"></div>
      </section>
    </div>
  );
};

export default About;
