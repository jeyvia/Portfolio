import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
        <span style={{color: info.baseColor}}>About Me!</span>
        <p>{info.bio}</p>
        </>;
    }

    function skillsText() {
        return <>
            <p style={{color: info.baseColor}}> I am proficient with</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency) => <li>{proficiency.icon} {proficiency.name}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> I have been exposed to</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill.icon} {skill.name}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
        </Box>
    )
}