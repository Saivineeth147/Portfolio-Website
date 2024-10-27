import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return (
            <>
                <p>
                    <span style={{ color: info.baseColor }}>{info.firstName} $ </span>
                     cat about {info.firstName}
                </p>
                <p>
                    <span style={{ color: info.baseColor }}>
                        about {info.firstName} <span className={Style.green}>(main)</span> $
                    </span>
                    {info.bio.map((line, index) => (
                        <span className={Style.bioText} key={index}>
                            {line}
                            <br />
                            <br />
                        </span>
                    ))}
                </p>
            </>
        );
    }
    

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Programming Languages</p>
            <ul className={Style.skills}>
                {info.skills.languages.map((language, index) => <li key={index}>{language}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Web Development</p>
            <ul className={Style.skills}>
                {info.skills.web.map((webdev, index) => <li key={index}>{webdev}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Content Management Systems</p>
            <ul className={Style.skills}>
                {info.skills.cms.map((cm, index) => <li key={index}>{cm}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Databases</p>
            <ul className={Style.skills}>
                {info.skills.databases.map((db, index) => <li key={index}>{db}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Frameworks/Tools </p>
            <ul className={Style.skills}>
                {info.skills.tools.map((tool, index) => <li key={index}>{tool}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return (
            <>
                <p><span style={{ color: info.baseColor }}>{firstName} $</span> cd Certifications & Awards </p>
                <p><span style={{ color: info.baseColor }}>Certifications & Awards <span
                    className={Style.green}>(main)</span> $</span> ls</p>
                <ul>
                    {info.Awards.map((award, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <Box 
                                component={'img'} 
                                src={award.icon} 
                                alt={`${award.label} icon`} 
                                sx={{ 
                                    width: '80px', 
                                    height: '80px', 
                                    marginRight:'10px',
                                }} 
                            />
                                {award.label}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
    
    
    
    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}