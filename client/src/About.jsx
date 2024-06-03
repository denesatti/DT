import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css';

import Singe from './assets/singe.jpg';
import Herzal from './assets/herzal.jpg';
import Coro from './assets/coro.jpg';
import Denes from './assets/denes.jpg';


function About() {

  const teamMembers = [
    {
      name: 'Herzal Radu',
      role: 'Lead Marketing Manager',
      description: 'Herzals descriptions.',
      image: Herzal,
    },
    {
      name: 'Singerean Tudor',
      role: 'Backend Developer',
      description: 'Singes description',
      image: Singe,
    },
    {
      name: 'Coroian Denisa',
      role: 'Full Stack Developer',
      description: 'hallo, im coro',
      image: Coro,
    },
    {
      name: 'Denes Tamas',
      role: 'Database Administrator',
      description: 'Sever was here',
      image: Denes,
    },
  ];

  return (
    <div className="about">
      <h1>About Our Team</h1>
      <p className='about_paragraph skin-colored-container'>We are a team of passionate developers who collaborated on building a full-stack blog application using the MERN stack so you can share your cats with everyone :) !</p>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={`${member.name}`} className="member-image"/>
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About