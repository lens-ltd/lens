import { Link } from 'react-router-dom';
import './portfolio.css';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {
  // FONTAWESOME ICONS
  const icons = ['fa-solid fa-up-right-from-square'];

  return (
    <>
      <div className="portfolio_container">
        {/* PORTFOLIO HEADING */}
        <div className="portfolio_heading">
          <Link to="#" id="portfolio_title">Our Work</Link>
        </div>
        {/* PORTFOLIO GRID */}
        <div className="portfolio_grid">
          {/* PORTFOLIO MAIN PRODUCT */}
          <section className="portfolio_main_product">
            <div className="portfolio_main_product_image">
              <img
                src="https://lens-website170952-staging.s3.amazonaws.com/logos/agribusiness-logo-bw.png"
                id="main_product_image"
                alt="Lens Accounts Logo"
              />
              <p id="main_product_title">Lens Accounts</p>
            </div>
            <div className="portfolio_main_product_text">
              <h3 id="main_product_slogan">
                All-in-one bookkeeping for Agribusinesses
              </h3>
              <p id="main_product_developers">Powered by Lens, Inc.</p>
            </div>
            <div className="portfolio_main_product_cta">
              <Link to="/products" id="main_product_cta">
                Get Started <FontAwesomeIcon icon={icons[0]} />
              </Link>
            </div>
          </section>
          {/* PORTFOLIO OTHER PRODUCTS */}
          <section className="portfolio_other_product">
            {/* PORTFOLIO OTHER PRODUCT - NYIBUTSA */}
            <span id='other_product_nyibutsa'>
              <div className="portfolio_other_product_image">
                <img
                  src="https://lens-website170952-staging.s3.amazonaws.com/logos/nyibutsa-logo.png"
                  alt="Nyibutsa Logo"
                  className="other_product_image"
                />
                <p className="other_product_title">Nyibutsa</p>
              </div>
              <div className="portfolio_other_product_text">
                <p className="other_product_slogan">
                  Never forget your lender or borrower, keep track of your
                  finances
                </p>
              </div>
              <div className="portfolio_other_product_cta">
                <Link target='_blank' to="https://play.google.com/store/apps/details?id=com.tusifuedison.nyibutsa" className="other_product_cta">
                  Download
                </Link>
              </div>
            </span>
            {/* DIVIDING LINE */}
            <hr id='other_product_separator' />
            {/* PORTFOLIO OTHER PRODUCT - INGABO SYNDICATE */}
            <span id='other_product_ingabo'>
              <div className="portfolio_other_product_image">
                <img
                  src="https://lens-website170952-staging.s3.amazonaws.com/logos/ingabosyndicate-logo-bw.jpeg"
                  alt="Ingabo Syndicate Database Logo"
                  className="other_product_image"
                />
                <p className="other_product_title">Ingabo Syndicate Database</p>
              </div>
              <div className="portfolio_other_product_text">
                <p className="other_product_slogan">
                An internal web platform to manage various members of the organization
                </p>
              </div>
              <div className="portfolio_other_product_cta">
                <Link target='_blank' to="https://ingabosyndicate.web.app/" className="other_product_cta">
                  Case Study
                </Link>
              </div>
            </span>
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
