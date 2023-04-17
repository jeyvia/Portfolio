import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import { FaJs } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { FaJava } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { DiMongodb } from "react-icons/di"
import { SiCplusplus } from "react-icons/si"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Javier",
    lastName: "Ong",
    initials: "jav", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Year 2, Information Security student",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Javier. I'm a Year 2 Information Security Major at the National University of Singapore. I enjoy watching movies and travelling!",
    skills:
        {
            proficientWith: [
                {
                    name: 'javascript',
                    icon: <FaJs></FaJs>
                }, 
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
                    name: 'Java',
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
            live: "https://nusmodulemapping.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/qianz-z/nusmodulemapping", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "hAIndle",
            source: "https://github.com/Kermit-and-Friends",
            image: mock2
        },
        {
            title: "MoneyGoWhere",
            source: "https://github.com/AY2223S1-CS2113T-W11-1/tp",
            image: mock3
        },
        {
            title: "enterPRIZE",
            source: "https://github.com/feliciaivane/enterPRIZE",
            image: mock4
        }
    ]
}