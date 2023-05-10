import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './hero.css';
import axios from 'axios';

const Hero = () => {
  const showTutorialOptions = () => {
    const tutorial_lists = document.querySelector('.hero_cta_tutorial_lists');
    tutorial_lists.classList.toggle('hide_tutorial_options');
  };

  const getPdfTutorial = async () => {
    axios
      .get(
        'https://lens-website170952-staging.s3.amazonaws.com/tutorial/Lens+Accounts+-+Guidebook.pdf',
        { responseType: 'blob' } // Set the response type to 'blob'
      )
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' }); // Create a blob from the response data
        const url = window.URL.createObjectURL(blob); // Generate a URL for the blob
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Lens Accounts - Guidebook.pdf';
        a.click();
        window.URL.revokeObjectURL(url); // Clean up the URL object
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="hero_container">
        {/* HERO TEXT */}
        <span className="hero_text_cta">
          <section className="hero_text">
            <h1 id="hero_heading">
              Bringing effective bookkeeping to agriculture
            </h1>
            <p id="hero_subheading">
              Redefine Agribusiness by{' '}
              <span id="hero_lens_slogan">recording every penny</span> with{' '}
              <Link id="hero_lens_accounts_link" to="/about">
                Lens Accounts
              </Link>
            </p>
          </section>
          {/* HERO CTA */}
          <section className="hero_cta">
            <span>
              <Link to="/contact" id="hero_cta_contact">
                Contact Us
              </Link>
            </span>
            <span id="hero_cta_learn_container">
              <Link to="/#" id="hero_cta_learn" onClick={showTutorialOptions}>
                <FontAwesomeIcon icon="fa-solid fa-play" /> See how it works
              </Link>
            </span>
          </section>
        </span>
        {/* HERO CTA TUTORIAL OPTIONS */}
        <ul className="hero_cta_tutorial_lists hide_tutorial_options">
          <li className="hero_cta_tutorial_option">
            <Link to="#" onClick={async () => getPdfTutorial()}>
              <FontAwesomeIcon icon="fa-solid fa-file-pdf" /> Download PDF Guide
            </Link>
          </li>
          <li className="hero_cta_tutorial_option">
            <Link to="#">
              <FontAwesomeIcon icon="fa-solid fa-play" /> Watch Video Tutorial
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hero;
