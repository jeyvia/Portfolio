import self from "../img/self.png"
import orbital1 from "../img/orbital1.png"
import orbital2 from "../img/orbital2.png"
import orbital3 from "../img/orbital3.png"
import orbital4 from "../img/orbital4.png"
import orbital5 from "../img/orbital5.png"
import haindle1 from "../img/haindle1.png"
import haindle2 from "../img/haindle2.png"
import enterprize1 from "../img/enterPRIZE1.png"
import enterprize2 from "../img/enterPRIZE2.png"
import moneygowhere1 from "../img/moneygowhere1.png"
import moneygowhere2 from "../img/moneygowhere2.png"
import { FaReact } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { FaJava } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { DiMongodb } from "react-icons/di"
import { SiCplusplus } from "react-icons/si"
import { SiFlutter } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Javier",
    lastName: "Ong",
    initials: "jav", 
    position: "a Year 2, Information Security student",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🦸‍♂️',
            text: 'biggest marvel nerd'
        },
        {
            emoji: '🇸🇬',
            text: 'from Singapore'
        },
        {
            emoji: "📧",
            text: "javier.ong00@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/jeyvia",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/javier-ong-842941146/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "Hello! I'm Javier. I'm a Year 2 Information Security Major at the National University of Singapore. I enjoy watching movies and travelling!",
    skills:
        {
            proficientWith: [
                {
                    name: 'react',
                    icon: <FaReact></FaReact>
                }, 
                {
                    name: 'github',
                    icon: <FaGithub></FaGithub>
                }, 
                {
                    name: 'python',
                    icon: <FaPython></FaPython>
                },
                {
                    name: 'java',
                    icon: <FaJava></FaJava>
                },
                {
                    name: 'C++',
                    icon: <SiCplusplus></SiCplusplus>
                },
                {
                    name: 'C'
                },
            ],
            exposedTo: [
                {
                    name: 'nodejs',
                    icon: <FaNodeJs></FaNodeJs>
                },
                {
                    name: 'MongoDB',
                    icon: <DiMongodb></DiMongodb>
                },
                {
                    name: 'flutter',
                    icon: <SiFlutter></SiFlutter>
                },
                {
                    name: 'hmtl',
                    icon: <SiHtml5></SiHtml5>
                },
                {
                    name: 'css',
                    icon: <SiCss3></SiCss3>
                }
            ]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "NUSModuleMapping",
            live: "https://nusmodulemapping1.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/qianz-z/nusmodulemapping", // this should be a link to the **repository** of the project, where the code is hosted.
            image: [orbital1, orbital2, orbital3, orbital4, orbital5]
        },
        {
            title: "hAIndle",
            source: "https://github.com/Kermit-and-Friends",
            image: [haindle1, haindle2]
        },
        {
            title: "MoneyGoWhere",
            source: "https://github.com/AY2223S1-CS2113T-W11-1/tp",
            image: [moneygowhere1, moneygowhere2]
        },
        {
            title: "enterPRIZE",
            source: "https://github.com/feliciaivane/enterPRIZE",
            image: [enterprize1, enterprize2]
        }
    ]
}