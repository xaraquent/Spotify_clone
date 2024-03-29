import React, { useState } from 'react';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import TechCard from '../components/TechCard';
import profilePicture from '../assets/profilePicture.jpg';
import reactLogo from '../assets/react.png';
import reduxLogo from '../assets/redux.png';
import routerLogo from '../assets/routerlogo.png';
import spotifyLogo from '../assets/spotifylogo.png';
import materialUi from '../assets/mui.png';
import netlify from '../assets/netlify.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

export default function Home() {
    const initialState = '#4d117095';
    const [gradientColor, setGradientColor] = useState(initialState);

    const changeColorOnHover = (event, color) => {
        if (event._reactName === 'onMouseEnter') {
            setGradientColor(color);
            console.log(gradientColor);
        }
        if (event._reactName === 'onMouseLeave') {
            setGradientColor(initialState);
        }
    };

    const LinkBox = ({ data }) => {
        return (
            <a href={data.link} target='_blank' style={linkStyle}>
                <img src={data.img} style={{ width: '20px' }} />
                {data.name}
            </a>
        );
    };

    return (
        <Box
            sx={{
                background: `linear-gradient(${gradientColor},#121212, #121212)`,
                width: '100vw',
                padding: '150px 30px',
                boxSizing: 'border-box',
                flex: 1,
                overflowY: 'auto',
            }}
        >
            <Box
                sx={{
                    ...basicBoxStyle,
                    display: 'flex',
                    flexWrap: { xs: 'wrap', justifyContent: 'center', md: 'nowrap' },
                }}
            >
                <Box sx={imageBox}>
                    <img
                        style={{ maxWidth: '340px', width: '100%', minWidth: '280px', borderRadius: '3%' }}
                        src={profilePicture}
                        alt=''
                    />
                </Box>
                <Box sx={textLinkBox}>
                    <Typography variant='h1' fontSize='3.1em' fontWeight={400} color='text.primary'>
                        Hi! I'm Simon
                    </Typography>
                    <Typography width={{ xs: '100%', md: '80%' }} fontSize='15px' color='text.secondary'>
                        {textBio}
                    </Typography>
                    <Box sx={linkBox}>
                        {links.map((link, idx) => {
                            return <LinkBox key={idx} data={link} />;
                        })}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ ...basicBoxStyle, marginTop: '20px' }}>
                {/* <Divider /> */}
                <Typography padding={'20px 20px'} variant='h4' marginTop={2} color='text.primary'>
                    Technologies
                </Typography>
            </Box>
            <Grid container sx={{ ...basicBoxStyle }}>
                {technologies.map((item, idx) => {
                    return (
                        <Grid key={idx} item padding={2} xs={12} md={6} lg={4}>
                            <TechCard data={item} setColor={changeColorOnHover} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

const basicBoxStyle = { maxWidth: '1300px', width: '100%', margin: '0 auto' };

const imageBox = {
    padding: '20px',
    width: { xs: '100%', md: 'auto' },
    textAlign: { xs: 'center', md: 'start' },
};

const textLinkBox = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: { xs: '0', md: '0 20px' },
    textAlign: { xs: 'center', md: 'start' },
    gap: '10px',
};

const linkStyle = {
    padding: '10px',
    background: '#ffffff1e',
    textDecoration: 'none',
    color: '#ffffff',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '10px',
};

const linkBox = {
    display: 'flex',
    gap: '10px',
    padding: '20px 0',
    justifyContent: { xs: 'center', md: 'start' },
    flexWrap: 'wrap',
};

const technologies = [
    {
        name: 'React',
        img: reactLogo,
        color: '#00deff55',
    },
    {
        name: 'React - router',
        img: routerLogo,
        color: '#f4425055',
    },
    {
        name: 'Redux - toolkit',
        img: reduxLogo,
        color: '#7f44c555',
    },
    {
        name: 'Spotify Web API',
        img: spotifyLogo,
        color: '#07da5a55',
    },
    {
        name: 'Netlify',
        img: netlify,
        color: '#12487c55',
    },
    {
        name: 'Material UI',
        img: materialUi,
        color: '#3e7ff755',
    },
];
const links = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/simon-michael-042b23162/',
        img: linkedin,
    },
    {
        name: 'Github',
        link: 'https://github.com/xaraquent',
        img: github,
    },
];

const textBio =
    "I'm a frontend developer that likes to create web application with various tools like HTML, CSS, JavaScript, React, Node and MongoDB. ";
