import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    drum,
    jupyter,
    openGL,
    randomQuotes,
    markdown,
    drumMachine,
    calculator,
    github,
    bootstrap,
    python,
    cplusplus,
    java,
    weatherapp,
    next,
    rest,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "GitHub",
      icon: github,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Rest API",
      icon: rest,
    },
    
  ];
  
  const experiences = [
    // Example
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Anime Genre Data Collection and Analysis Project",
      company_name: "UCSD Class Project",
      icon: jupyter,
      iconBg: "white",
      date: "March 2022",
      points: [
        "Jupyter Notebook, Python 3",
        "Collaborated with a team of five to research and gather raw data from a multitude of sources to develop a report about correlations between age groups and their anime genre preferences.",
        "Performed data wrangling and cleaned data to perform exploratory analysis in finding relationships between distributions.",
        "Performed t-tests, linear regression models (predictive models and algorithms), and built various data visualizations such as (line graphs, scatter plots, bar charts, and histograms.",
        "Coordinated and co-led team members with the distribution and scope of the project.",
      ],
    },
    {
      title: "Modern Room Final Project",
      company_name: "UCSD Class Project",
      icon: openGL,
      iconBg: "white",
      date: "December 2022",
      points: [
        "C++, OpenGL",
        "Designed and created a significant OpenGL program demonstrating an understanding of technical, artistic, and creative merits.",
        "Utilized various OpenGL concepts such as homogeneous coordinates, perspective, Phong lighting and Cook-Torrance lighting, Bresenham algorithm, texture mapping, Bézier curves, and a multitude of transformations and interpolation.",
        "Applied C++ and mathematic knowledge to map out areas for lighting and object modeling.",
        "Effectively implements knowledge learned from the course into styling and coding the final project.",
      ],
    },
    {
      title: "Drum Machine Project",
      company_name: "Personal Project",
      icon: reactjs,
      iconBg: "white",
      date: "November 2023",
      points: [
        "React, JavaScript, HTML/CSS, Bootstrap",
        "Created and styled a website that offers users a mini drum set with 9 different buttons that play a sound when pressed or clicked. It has 2 settings for 2 different types of sounds, a volume slider as well as a power button.",
        "Utilized React and Javascript to create an interactive website while styling the website with reboot and CSS",
      ],
    },
    {
      title: "Calculator Project",
      company_name: "Personal Project",
      icon: reactjs,
      iconBg: "white",
      date: "December 2023",
      points: [
        "React, JavaScript, HTML/CSS",
        "Created and styled a website that offers users a functioning calculator that can compute basic arithmetics such as addition, subtraction, multiplication and division",
        "Made using multiple components and handlers to execute the math needed to provides the correct answer bases on the inputs",
        "Utilized React and Javascript to create an interactive website while styling the website CSS",
      ],
    },
    {
      title: "Weather Application Project",
      company_name: "Personal Project",
      icon: next,
      iconBg: "white",
      date: "April 2024",
      points: [
        "NextJS, JavaScript, HTML/CSS, Tailwind CSS, Vercel, API, Tomorrow.io",
        "Created and styled a website based on a weather app that provides users with real time updated weather forecast for the next 24 hours and 7 days",
        "The application provides the name, temperature, weather condition as well as weather condition images",
        "It utilizes API calls into Tomorrow.io's DataBase, in order to retrieve data to provides for the website to display correct information based on user input of their location name or Zipcode",
        "Utilized NextJS and Javascript to create an interactive website while styling the website CSS",
      ],
    },
    
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "WeatherApp",
      description:
        "Website of a Weather Forecast App that display current weather, temperature, weather condition and images. Realtime forecast for the next 24 hours, 7 days forecast",
      tags: [
        {
          name: "NextJS",
          color: "bg-gradient-to-r from-stone-300 to-stone-500 text-transparent bg-clip-text",
        },
        {
          name: "CSS",
          color: "bg-gradient-to-r from-sky-300 to-blue-500 text-transparent bg-clip-text",
        },
        {
          name: "Javascript",
          color: "bg-gradient-to-r from-lime-200 to-amber-500 text-transparent bg-clip-text",
        },
        {
          name: "REST API",
          color: "bg-gradient-to-r from-sky-300 to-cyan-400 text-transparent bg-clip-text",
        },
      ],
      image: weatherapp,
      source_code_link: 'https://github.com/hyah01/WeatherApp/',
      demo_code_link: 'https://weatherapp-bice-alpha.vercel.app',
    },
    {
      name: "Calculator",
      description:
        "Website version of a functioning basic calculator.",
      tags: [
        {
          name: "ReactJS",
          color: "bg-gradient-to-r from-blue-700 to-indigo-200 text-transparent bg-clip-text",
        },
        {
          name: "CSS",
          color: "bg-gradient-to-r from-sky-300 to-blue-500 text-transparent bg-clip-text",
        },
        {
          name: "Javascript",
          color: "bg-gradient-to-r from-lime-200 to-amber-500 text-transparent bg-clip-text",
        },
      ],
      image: calculator,
      source_code_link: 'https://github.com/hyah01/Calculator/',
      demo_code_link: 'https://hyah01.github.io/Calculator/',
    },
    {
      name: "Drum Machine",
      description:
        "Website version of a drum machine with functioning on/off button, 18 different sound keys split across 2 settings and a volume slider ",
      tags: [
        {
          name: "ReactJS",
          color: "bg-gradient-to-r from-blue-700 to-indigo-200 text-transparent bg-clip-text",
        },
        {
          name: "CSS",
          color: "bg-gradient-to-r from-sky-300 to-blue-500 text-transparent bg-clip-text",
        },
        {
          name: "Javascript",
          color: "bg-gradient-to-r from-lime-200 to-amber-500 text-transparent bg-clip-text",
        },
        {
          name: "BootStrap",
          color: "bg-gradient-to-r from-violet-700 to-fuchsia-400 text-transparent bg-clip-text",
        },
      ],
      image: drumMachine,
      source_code_link: 'https://github.com/hyah01/Drum-Machine',
      demo_code_link: 'https://hyah01.github.io/Drum-Machine/',
    },
    {
      name: "Markdown Previewer",
      description:
        "Website of a Markdown Previewer that markup language with plain text formatting syntax ",
      tags: [
        {
          name: "ReactJS",
          color: "bg-gradient-to-r from-blue-700 to-indigo-200 text-transparent bg-clip-text",
        },
        {
          name: "CSS",
          color: "bg-gradient-to-r from-sky-300 to-blue-500 text-transparent bg-clip-text",
        },
        {
          name: "Javascript",
          color: "bg-gradient-to-r from-lime-200 to-amber-500 text-transparent bg-clip-text",
        },
      ],
      image: markdown,
      source_code_link: 'https://github.com/hyah01/Markdown-Previewer',
      demo_code_link: 'https://hyah01.github.io/Markdown-Previewer/',
    },
    {
      name: "Random Quote Machine",
      description:
        "A Website that generate a random quote from a selection of quotes",
      tags: [
        {
          name: "react",
          color: "bg-gradient-to-r from-blue-700 to-indigo-200 text-transparent bg-clip-text",
        },
        {
          name: "css",
          color: "bg-gradient-to-r from-sky-300 to-blue-500 text-transparent bg-clip-text",
        },
        {
          name: "javascript",
          color: "bg-gradient-to-r from-lime-200 to-amber-500 text-transparent bg-clip-text",
        },
      ],
      image: randomQuotes,
      source_code_link: 'https://github.com/hyah01/randomQuoteMachine',
      demo_code_link: 'https://hyah01.github.io/randomQuoteMachine/',
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };