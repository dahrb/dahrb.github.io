// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-attended-the-19th-international-conference-on-artificial-intelligence-and-law-icail-23-in-braga-portugal",
          title: 'Attended the 19th International Conference on Artificial Intelligence and Law (ICAIL ‘23) in...',
          description: "",
          section: "News",},{id: "news-presented-some-early-work-on-experiments-using-data-from-the-european-patent-office-at-the-university-of-liverpool-s-postgraduate-law-conference",
          title: 'Presented some early work on experiments using data from the European Patent Office...',
          description: "",
          section: "News",},{id: "news-submitted-my-msc-dissertation-entitled-predicting-decisions-of-the-european-patent-office-s-boards-of-appeal-using-machine-learning",
          title: 'Submitted my MSc dissertation entitled “Predicting Decisions of the European Patent Office’s Boards...',
          description: "",
          section: "News",},{id: "news-achieved-2nd-place-at-the-international-organization-for-migration-s-iom-hackathon-centred-on-bridging-climate-change-and-human-mobility-with-interdisciplinary-colleagues-from-the-university-of-liverpool-and-london-school-of-economics-this-work-will-go-towards-the-iom-s-cop-28-submission",
          title: 'Achieved 2nd place at the International Organization for Migration’s (IOM) Hackathon centred on...',
          description: "",
          section: "News",},{id: "news-presented-our-findings-from-the-iom-s-hackathon-to-a-virtual-audience-in-nairobi-kenya-including-experts-from-the-un-academia-and-industry",
          title: 'Presented our findings from the IOM’s Hackathon to a virtual audience in Nairobi,...',
          description: "",
          section: "News",},{id: "news-awarded-a-prize-for-best-doctoral-consortium-paper-for-my-work-predicting-decisions-of-the-european-patent-office-s-boards-of-appeal-using-machine-learning-at-the-36th-international-conference-on-legal-knowledge-and-information-systems-jurix-23",
          title: 'Awarded a prize for Best Doctoral Consortium Paper for my work “Predicting decisions...',
          description: "",
          section: "News",},{id: "news-presented-our-paper-tackling-the-backlog-support-for-completing-and-validating-forms-at-the-ai-amp-amp-access-to-justice-workshop-at-jurix-23",
          title: 'Presented our paper “Tackling the Backlog: Support for Completing and Validating Forms” at...',
          description: "",
          section: "News",},{id: "news-i-was-mentor-at-the-hackathon-unlocking-the-british-music-experience-museum-with-ai-helping-students-to-conceptualise-and-prototype-their-ideas-for-innnovative-applications-of-ai-to-the-british-music-experience-museum",
          title: 'I was mentor at the hackathon “Unlocking the British Music Experience Museum with...',
          description: "",
          section: "News",},{id: "news-joined-the-program-committee-for-the-automated-semantic-analysis-of-information-in-legal-text-workshop-asail-at-icail-25",
          title: 'Joined the program committee for the Automated Semantic Analysis of Information in Legal...',
          description: "",
          section: "News",},{id: "news-began-my-month-long-research-visit-to-utrecht-university-based-in-their-ai-labs",
          title: 'Began my month long research visit to Utrecht University based in their AI...',
          description: "",
          section: "News",},{id: "news-presented-my-phd-work-in-utrecht-university-to-the-national-police-ai-lab-and-the-responsible-ai-group",
          title: 'Presented my PhD work in Utrecht University to the National Police AI Lab...',
          description: "",
          section: "News",},{id: "news-ended-my-research-visit-to-utrecht-university",
          title: 'Ended my research visit to Utrecht University.',
          description: "",
          section: "News",},{id: "news-i-presented-my-work-at-icail-2025-in-chicago",
          title: 'I presented my work at ICAIL 2025 in Chicago!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/icail_presentation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64.%62%61%72%65%68%61%6D@%6C%69%76%65%72%70%6F%6F%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dahrb", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/david-bareham", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-7542-8966", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=r6wqBwgAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
