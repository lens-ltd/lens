// S3 BUCKET
const s3_bucket = 'https://lens-website170952-staging.s3.amazonaws.com';

// TEAM MEMBERS
  const team_members = [
    {
      name: 'Shingiro Christian, CPA',
      image:
        `${s3_bucket}/team/shingiro-christian.jpeg`,
      position: `Managing Director`,
      resume: `${s3_bucket}/team/LENS+-+SHINGIRO+Christian+-+RESUME.pdf`,
      bio: `A well-rounded leader with various technical competencies, including audit, accounting, finance and tax advisory, data analytics, and sales.`,
      social_media: {
        twitter: `https://twitter.com/ShingiroCh`,
        linkedin: `https://www.linkedin.com/in/christianshingirocpa/`,
      },
    },
    {
      name: `Ntabana Kevin Joshua`,
      image:
        `${s3_bucket}/team/ntabana-joshua-kevin.jpeg`,
      position: `Admin & PR`,
      bio: `Integral, passionate, and committed teamplayer, skilled in administration and public relations.`,
      resume: `${s3_bucket}/team/LENS+-+NTABANA+Kevin+Joshua+-+RESUME.pdf`,
      social_media: {
        twitter: `https://twitter.com/KevinNtabana`,
        linkedin: `https://www.linkedin.com/in/joshua-ntabana-90949a231/`,
      },
    },
    {
      name: `Tusifu Edison`,
      image:
        `${s3_bucket}/team/tusifu-edison.jpeg`,
      position: `Chief Technical Officer`,
      resume: `${s3_bucket}/team/LENS+-+TUSIFU+Edison+-+RESUME.pdf`,
      bio: `Well-versed in technology and writing code to create reliable and user-friendly systems.`,
      social_media: {
        twitter: `https://twitter.com/EdisonTusifu`,
        linkedin: `https://www.linkedin.com/in/edison-tusifu-998050153/`,
      },
    },
    {
      name: `Abizera Fabrice`,
      image:
        `${s3_bucket}/team/abizera-fabrice.jpeg`,
      position: `Finance Officer`,
      resume: `${s3_bucket}/team/ABIZERA+Fabrice+-+RESUME.pdf`,
      bio: "Drives Lens` financial health and growth leveraging his knowledge in finance and accounting.",
      social_media: {
        twitter: `https://twitter.com/abizerafabrice`,
        linkedin: `https://www.linkedin.com/in/abizera-fabrice-a1029624b/`,
      },
    },
    {
      name: `Sande Alex`,
      image:
        `${s3_bucket}/team/sande-alex.jpeg`,
      position: `Tax Advisor`,
      resume: `${s3_bucket}/team/SANDE+Alex+-+RESUME.pdf`,
      bio: "Passionate and detail-oriented team player ensuring that the company remains compliant throughout.",
      social_media: {
        twitter: `https://twitter.com/SandeAlex20`,
        linkedin: `https://www.linkedin.com/in/sande-alex-885a1522a/`,
      },
    },
    {
      name: `Nishimwe Prince`,
      image:
        `${s3_bucket}/team/nishimwe-prince.jpg`,
      position: `Software Developer`,
      resume: `${s3_bucket}/team/RESUME+-+Nishimwe+Prince.pdf`,
      bio: "Ambitious full-stack developer passionate about building scalable software solutions.",
      social_media: {
        twitter: `https://twitter.com/nishimweprince`,
        linkedin: `https://www.linkedin.com/in/nishimweprince/`,
      },
    },
  ];

export { s3_bucket, team_members };
