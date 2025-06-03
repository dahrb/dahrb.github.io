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
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
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
          section: "News",},{
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
