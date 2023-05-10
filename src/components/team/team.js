import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './team.css';
import '../../index.css';

const Team = () => {
  const team_members = [
    {
      name: 'Shingiro Christian, CPA',
      image:
        'https://lens-website170952-staging.s3.amazonaws.com/team/shingiro-christian.jpeg',
      position: 'Managing Director',
      social_media: {
        twitter: 'https://twitter.com/ShingiroCh',
        linkedin: 'https://www.linkedin.com/in/christianshingirocpa/',
      },
    },
    {
      name: 'Ntabana Kevin Joshua',
      image:
        'https://lens-website170952-staging.s3.amazonaws.com/team/ntabana-joshua-kevin.jpeg',
      position: 'Admin & PR',
      social_media: {
        twitter: 'https://twitter.com/KevinNtabana',
        linkedin: 'https://www.linkedin.com/in/joshua-ntabana-90949a231/',
      },
    },
    {
      name: 'Tusifu Edison',
      image:
        'https://lens-website170952-staging.s3.amazonaws.com/team/tusifu-edison.jpeg',
      position: 'Chief Technical Officer',
      social_media: {
        twitter: 'https://twitter.com/EdisonTusifu',
        linkedin: 'https://www.linkedin.com/in/edison-tusifu-998050153/',
      },
    },
  ];

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
  ];

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
          {team_members.map((member, index) => {
            return (
              <div key={index} className="team_member">
                <div className="team_member_profile">
                  <img
                    className="team_member_profile_image"
                    src={member.image}
                    alt={member.name}
                  />
                  <span>
                    <p className="team_member_profile_name">{member.name}</p>
                    <p className="team_member_profile_position">
                      {member.position}
                    </p>
                  </span>
                </div>
                <div className="team_member_info">
                  <p className="team_member_info_description">
                    {member.description}
                  </p>
                </div>
                <div className="team_member_social_media">
                  <Link
                    to={member.social_media.twitter}
                    target="_blank"
                    className="team_member_social_media_link"
                  >
                    <FontAwesomeIcon className='social_media_icon' icon={icons[0].icon} />
                  </Link>
                  <Link
                    to={member.social_media.linkedin}
                    target="_blank"
                    className="team_member_social_media_link"
                  >
                    <FontAwesomeIcon className='social_media_icon' icon={icons[1].icon} />
                  </Link>
                </div>
                <div className="team_member_bio">
                  <Link
                    to={`#`}
                    className="team_member_bio_link"
                  >
                    Expand <FontAwesomeIcon icon={icons[2].icon} />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
        {/* TEAM CTA */}
        <section className="team_cta">
        <Link to={`/team`} className="team_cta_link">
            Discover More
        </Link>
        </section>
      </div>
    </>
  );
};

export default Team;
