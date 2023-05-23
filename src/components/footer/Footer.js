import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  /* RESOURCES LIST */
  const resources_list = [
    {
      title: 'Guidebook',
      path: '#',
    },
    {
      title: 'Lens Accounts',
      path: 'https://accounts.lens.rw',
    },
    {
      title: 'Nyibutsa App',
      path: 'https://play.google.com/store/apps/details?id=com.tusifuedison.nyibutsa',
    },
    {
      title: 'Nyibutsa Web',
      path: 'https://nyibutsa.lens.rw',
    },
  ];
  /* ONLINE PRESENCE LIST */
  const online_presence_list = [
    {
      path: 'https://twitter.com/Lens_Incc',
      title: 'Twitter',
      icon: 'fa-brands fa-twitter',
    },
    {
      path: 'https://www.linkedin.com/company/lens-inc/about/?viewAsMember=true',
      title: 'LinkedIn',
      icon: 'fa-brands fa-linkedin',
    },
    {
      path: 'https://www.instagram.com/lens_inc2022/',
      title: 'Instagram',
      icon: 'fa-brands fa-instagram',
    },
    {
      path: 'https://github.com/lens-ltd',
      title: 'Github',
      icon: 'fa-brands fa-github',
    },
  ];
  /* COMPANY LIST */
  const company_list = [
    {
      path: '/about',
      title: 'About',
    },
    {
      path: '/contact',
      title: 'Contact',
    },
    {
      path: '/team',
      title: 'Team',
    },
    {
      path: '/join',
      title: 'Join',
    },
  ];
  return (
    <>
      <hr className="footer_hr" />
      <footer className="main_footer">
        <span>
          <section className="addresses">
            <span>
              <img
                src="https://lens-website170952-staging.s3.amazonaws.com/branding/lens-logo-white-background.png"
                alt="Lens Footer Logo"
                className="footer_logo"
              />
            </span>
            <span>
              <h4>Contacts</h4>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <Link to="mailto:info@lens.rw">info@lens.rw</Link>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <Link to="mailto:info@lens.rw">0788 552 790</Link>
                </li>
              </ul>
            </span>
          </section>
          <section className="resources">
            <h4>Resources</h4>
            <ul className="footer_list">
              {resources_list.map((resource, index) => {
                return (
                  <li key={index}>
                    <Link to={resource.path}>{resource.title}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </span>
        <span>
          <section className="online_presence">
            <h4>Connect with us</h4>
            <ul className="footer_list">
              {online_presence_list.map((presence, index) => {
                return (
                  <li key={index}>
                    <FontAwesomeIcon
                      icon={presence.icon}
                      className="footer_link_icon"
                    />
                    <Link target="_blank" to={presence.path}>
                      {presence.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="company">
            <h4>Company</h4>
            <ul className="footer_list">
              {company_list.map((company, index) => {
                return (
                  <li key={index}>
                    <Link to={company.path}>{company.title}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </span>
      </footer>
    </>
  );
};

export default Footer;
