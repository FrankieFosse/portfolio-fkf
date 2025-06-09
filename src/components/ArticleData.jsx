const ArticleData = [
    {
      id: 1,
      title: "Holidaze",
      image: "/images/Holidaze.png",
      detailedDescription:
        "Holidaze is a full-featured React-based web application designed for users to browse, create, and book accommodation venues. The platform includes secure user authentication, personalized profile management, and dynamic routing using React Router for seamless navigation. Users can explore available venues, view detailed listings, and manage their own bookings. Venue managers have access to tools for listing new properties, editing details, and viewing booking activity. The intuitive interface and responsive design ensure a smooth user experience across devices.",
      link: "https://holidaze-fkf.netlify.app/",
      github: "https://github.com/FrankieFosse/Holidaze",
      reflections:
        "Working on Holidaze helped me understand the value of using Git branches effectively. By maintaining a stable master branch at all times, I ensured a reliable version of the project was always available without critical errors. When developing new features, I created separate branches to work in isolation, which allowed for safer experimentation and easier debugging. Once a feature was complete and tested, I merged it back into the master branch with confidence. This project also strengthened my familiarity with React. I gained hands-on experience setting up a React application from scratch, organizing the project with a clear folder structure, and building the interface through reusable components. These practices significantly improved both the maintainability and scalability of the codebase.",
    },
    {
      id: 2,
      title: "Social Media App",
      image:
        "/images/SocialMediaApp.png",
      detailedDescription:
        "Social Media App is a responsive JavaScript web application styled with Tailwind CSS, designed to replicate core social media functionality. Users can register and log in securely, create and share posts, and follow other users to build a personal feed. The interface emphasizes clarity and usability, with dynamic content rendering and intuitive navigation. Tailwind’s utility-first styling ensures a clean, modern UI across all screen sizes. The app demonstrates core concepts such as authentication flows, user interaction, and real-time UI updates.",
      link: "https://tailwind-ca.netlify.app/dist/index.html",
      github: "https://github.com/FrankieFosse/tailwind-ca-frankie",
      reflections:
      "This project was my first experience using Tailwind CSS, and I was pleasantly surprised by how intuitive and efficient it made the styling process. I quickly found myself preferring Tailwind over writing traditional CSS due to its utility-first approach and streamlined workflow. One recent enhancement I implemented was a sort function on the feed page. While sorting wasn't originally a project requirement, I saw it as an opportunity to improve usability and add value. With this feature, users can now easily sort posts by different criteria.",
    },
    {
      id: 3,
      title: "Delekat",
      image: "/images/Delekat.png",
      detailedDescription:
        "Delekat is a modern React-based web application that allows users to create, share, and explore food recipes. Integrated with Firebase, the platform leverages real-time database and authentication services to enable secure user login, data storage, and dynamic content updates. Users can submit their own recipes, browse community contributions, and manage their personal content. The application also includes an admin dashboard with advanced tools for moderating user submissions and overseeing platform activity. Delekat combines intuitive design with robust backend functionality to deliver a seamless and engaging user experience.",
      link: "https://delekat.netlify.app/",
      github: "https://github.com/Delekat-gruppeprosjekt/delekat",
      reflections:
      "Delekat was a group project that significantly enhanced my understanding of teamwork and version control through effective branch management. Initially, we chose Sanity and Clerk for our backend setup. However, as the project progressed, we identified limitations that made these tools unsuitable for our needs. After careful evaluation, we migrated to Firebase, which offered greater flexibility and met our requirements more effectively. This experience deepened my understanding of backend development and taught me valuable lessons about selecting and integrating backend services, skills that I’ve since applied to other projects.",
    },
  ];

export default ArticleData;