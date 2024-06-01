import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css';


function About() {

  const teamMembers = [
    {
      name: 'Alice Johnson',
      role: 'Lead Marketing Manager',
      description: 'Alice is a skilled frontend developer with a passion for creating intuitive user interfaces using React.',
      image: 'alice.jpg',
    },
    {
      name: 'Bob Smith',
      role: 'Backend Developer',
      description: 'Bob is a backend expert who ensures our servers run smoothly and efficiently with Node.js and Express.',
      image: 'bob.jpg',
    },
    {
      name: 'Carol White',
      role: 'Full Stack Developer',
      description: 'Carol is a full-stack developer with a knack for integrating frontend and backend technologies seamlessly.',
      image: 'carol.jpg',
    },
    {
      name: 'Dave Brown',
      role: 'Database Administrator',
      description: 'Dave manages our MongoDB database, ensuring data integrity and optimal performance.',
      image: 'dave.jpg',
    },
  ];

  return (
    <div className="about">
      <h1>About Our Team</h1>
      <p>We are a team of passionate developers who collaborated on building a full-stack forum application using the MERN stack.</p>
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