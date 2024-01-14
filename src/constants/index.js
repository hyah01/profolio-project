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
        "Jypyter Notebook, Python 3",
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
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Calculator",
      description:
        "Website version of a functioning basic calculator.",
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
        {
          name: "bootStrap",
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