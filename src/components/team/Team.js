import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './team.css';
import '../../index.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import downloadHelper from '../../helpers/download';
import { team_members } from '../../helpers/constants';

const Team = () => {
  // CAROUSEL SETTINGS
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // ICONS
  const icons = [
    {
      name: 'twitter',
      icon: 'fa-brands fa-twitter',
    },
    {
      name: 'linkedin',
      icon: 'fa-brands fa-linkedin',
    },
    {
      name: 'caret-down',
      icon: 'fa-solid fa-caret-down',
    },
    {
      name: 'caret-up',
      icon: 'fa-solid fa-caret-up',
    },
    {
      name: 'file',
      icon: 'fa-regular fa-file',
    }
  ];

  // TOGGLE BIO
  const toggleBio = (index) => {
    
    const bio = document.querySelectorAll(`.team_member_bio`);
    const bio_expand = document.querySelectorAll(`.bio_expand`);
    const bio_collapse = document.querySelectorAll(`.bio_collapse`);

    bio_expand[index].classList.toggle('bio_hide');
    bio_collapse[index].classList.toggle('bio_hide');
    bio[index].classList.toggle('bio_hide');
  };

  return (
    <>
      <div className="team_container">
        {/* TEAM HEADING */}
        <section className="team_heading">
          <h2 id="team_heading_title">
            Find out the individuals driving innovation at Lens
          </h2>
          <p id="team_heading_text">
            a sneak peek into our founders and the team
          </p>
        </section>
        {/* TEAM MEMBERS */}
        <section className="team_members_container">
          <Carousel
            responsive={responsive}
            draggable={true}
            customTransition="all .5"
            swipeable={true}
            containerClass="carousel-container"
          >
            {team_members.map((member, index) => {
              return <TeamMember key={index} member={member} index={index} icons={icons} toggleBio={toggleBio} />;
            })}
          </Carousel>
        </section>
      </div>
    </>
  );
};

const TeamMember = ({ member, index, icons, toggleBio }) => {
  return (
    <>
      <div className="team_member">
        {/* TEAM MEMBER PROFILE */}
        <div className="team_member_profile">
          <img
            className="team_member_profile_image"
            src={member.image}
            alt={member.name}
          />
          <span>
            <p className="team_member_profile_name">{member.name}</p>
            <p className="team_member_profile_position">{member.position}</p>
          </span>
        </div>
        {/* TEAM MEMBER SOCIAL MEDIA */}
        <div className="team_member_social_media">
          <Link
            to={member.social_media.twitter}
            target="_blank"
            className="team_member_social_media_link"
          >
            <FontAwesomeIcon
              className="social_media_icon"
              icon={icons[0].icon}
            />
          </Link>
          <Link
            to={member.social_media.linkedin}
            target="_blank"
            className="team_member_social_media_link"
          >
            <FontAwesomeIcon
              className="social_media_icon"
              icon={icons[1].icon}
            />
          </Link>
        </div>
        {/* TEAM MEMBER BIO */}
        <div className="team_member_bio bio_hide">
          <p>
            {member.bio}
          </p>
          <Link to={`#`} onClick={async () => downloadHelper(member.resume, member.name)} className="team_member_resume">
            Full Resume <FontAwesomeIcon icon={icons[4].icon} />
          </Link>
        </div>
        {/* TEAM MEMBER CTA */}
        <div className="team_member_cta">
          <Link to={`#`} onClick={() => toggleBio(index)} className="team_member_bio_link bio_expand">
            Bio <FontAwesomeIcon icon={icons[2].icon} />
          </Link>
          <Link to={`#`} onClick={() => toggleBio(index)} className="team_member_bio_link bio_collapse bio_hide">
            Collapse <FontAwesomeIcon icon={icons[3].icon} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Team;
