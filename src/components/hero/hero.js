import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './hero.css';

const Hero = () => {
  // HERO CTA TUTORIAL OPTIONS
  const tutorial_options = [
    {
      title: 'Download PDF Guide',
      link: '/#',
      icon: 'fa-solid fa-file-pdf',
    },
    {
      title: 'Watch Video Tutorial',
      link: '/#',
      icon: 'fa-solid fa-play',
    },
  ];

  const showTutorialOptions = () => {
    const tutorial_lists = document.querySelector('.hero_cta_tutorial_lists');
    tutorial_lists.classList.toggle('hide_tutorial_options');
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
              {/* HERO CTA TUTORIAL OPTIONS */}
              <ul className="hero_cta_tutorial_lists hide_tutorial_options">
                {tutorial_options.map((option, index) => {
                  return (
                    <li key={index} className="hero_cta_tutorial_option">
                      <Link to={option.link}>
                        <FontAwesomeIcon icon={option.icon} /> {option.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </span>
          </section>
        </span>
        {/* HERO NAVIGATION */}
        <section className="hero_navigation">
          <Link to="/products" id="hero_nav">
            <FontAwesomeIcon icon="fa-solid fa-arrow-down" /> One minute tour
          </Link>
        </section>
      </div>
    </>
  );
};

export default Hero;
