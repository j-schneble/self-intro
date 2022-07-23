import React from 'react'
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from 'react-icons/fa'
import {

  SiChakraui,

  SiExpress,
  SiGit,
  SiGraphql,
  SiHandlebarsdotjs,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiAdobepremierepro,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiVim,
  SiThreedotjs,
  SiGatsby,
  SiGmail,
} from 'react-icons/si'
import {  FaLinkedin,  FaGithub,   } from "react-icons/fa";


const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} jack. All Rights Reserved.`,
  author: {
      name: "Jack Schneble",
      accounts: [
          {
              url: "https://github.com/j-schneble",
              icon: <FaGithub />,
              name: "Github",
              type: "gray"
          },
          {
              url: "https://www.linkedin.com/",
              icon: <FaLinkedin />,
              name: "Linkedin",
              type: "linkedin"
          },
      
       
          {
              url: "mailto:jack@jackschneble.com",
              icon: <SiGmail />,
              name: "Gmail",
              type: "red"
          }
      ]
  }
}

const languageStacks = [
   
        {
          name: 'NextJS',
          icon: <SiNextdotjs />,
          url: "https://javascript.com/",
        },
        { name: 'Three.js',
          icon: <SiThreedotjs />,
          url: "https://javascript.com/",
        },
        {
          name: 'Firebase',
          icon: <SiFirebase />,
          url: "https://javascript.com/",
        },
        {
          name: 'Chakra',
          icon: <SiChakraui />,
          url: "https://javascript.com/",
        },
        {
          name: 'Git',
          icon: <SiGit />,
          url: "https://javascript.com/",
        },
        {
          name: 'React',
          icon: <FaReact />,
          url: "https://javascript.com/",
        },
      ]

      const frontendStacks = [
  
        {
          name: 'HTML5',
          icon: <FaHtml5 />,
          url: "https://javascript.com/",
        },
        {
          name: 'React',
          icon: <FaReact />,
          url: "https://javascript.com/",
        },
        {
          name: 'NextJS',
          icon: <SiNextdotjs />,
          url: "https://javascript.com/",
        },
        {
          name: 'Handlebars',
          icon: <SiHandlebarsdotjs />,
          url: "https://javascript.com/",
        },
        { name: 'Three.js',
          icon: <SiThreedotjs />,
          url: "https://javascript.com/",
        },
      ]
  

      const cssStacks = [
        {
          name: 'CSS3',
          icon: <FaCss3 />,
          url: "https://javascript.com/",
        },
        {
          name: 'Sass',
          icon: <FaSass />,
          url: "https://javascript.com/",
        },
        {
          name: 'Chakra',
          icon: <SiChakraui />,
          url: "https://javascript.com/",
        },
        {
          name: 'Tailwind',
          icon: <SiTailwindcss />,
          url: "https://javascript.com/",
        },
        {
          name: 'Bootstrap',
          icon: <FaBootstrap />,
          url: "https://javascript.com/",
        },
        {
            name: 'Gatsby',
            icon: <SiGatsby />,
            url: "https://javascript.com/",
          },
      ]

    const backendStacks = [
        {
          name: 'Express',
          icon: <SiExpress />,
          url: "https://javascript.com/",
        },
        {
          name: 'NodeJS',
          icon: <FaNodeJs />,
          url: "https://javascript.com/",
        },
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql />,
          url: "https://javascript.com/",
        },
        {
          name: 'MongoDB',
          icon: <SiMongodb />,
          url: "https://javascript.com/",
        },
      ]
 
    const otherStacks = [
        {
          name: 'GraphQL',
          icon: <SiGraphql />,
          url: "https://javascript.com/",
        },
        { name: 'Adobe Photoshop',
          icon: <SiAdobephotoshop />,
          url: "https://javascript.com/",
        },
        { name: 'Adobe XD',
          icon: <SiAdobexd />,
          url: "https://javascript.com/",
        },
        { name: 'Adobe Premier',
          icon: <SiAdobepremierepro />,
          url: "https://javascript.com/",
        },
        { name: 'Adobe Lightroom',
          icon: <SiAdobelightroom />,
          url: "https://javascript.com/",
        },
        {
          name: 'Git',
          icon: <SiGit />,
          url: "https://javascript.com/",
        },
        {
          name: 'Vim',
          icon: <SiVim />,
          url: "https://javascript.com/",
        },
      ]
  
  export { languageStacks, frontendStacks, cssStacks, backendStacks, otherStacks, siteConfig }