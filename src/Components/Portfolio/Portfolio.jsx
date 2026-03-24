import React from 'react'
import './Portfolio.css'
import project1 from '../../assets/commerce.png'
import project2 from '../../assets/banking.png'
import project3 from '../../assets/hero.png'        

const Portfolio = () => {

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-stack MERN e-commerce app with product management, cart, and authentication.",
      image: project1,
      link: "https://e-commerce-one-psi-32.vercel.app/"
    },
    {
      id: 2,
      title: "Bank App Dashboard",
      description: "A modern banking dashboard with charts, transactions, and user authentication.",
      image: project2,
      link: "https://bank-app-pni4.vercel.app/"
    },
    {
      id: 3,
      title: "College Management System",
      description: "A responsive React app for managing college operations with student records, courses, and administration.",
      image: project3,
      link: "https://big-el-college.vercel.app/"
    }
  ]

  return (
    <div id='portfolio' className="mywork">

      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <div className="mywork-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <a href={project.link} target="_blank" rel="noreferrer">
                View Project →
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Portfolio