import React from 'react'
import './Services.css'

const Services = () => {

  const servicesData = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive and modern user interfaces using React, HTML, CSS, and JavaScript."
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Creating scalable server-side applications with Node.js, Express, and MongoDB."
    },
    {
      id: 3,
      title: "Full-Stack Development",
      description: "Developing complete MERN stack applications with clean and maintainable architecture."
    },
    {
      id: 4,
      title: "API Integration",
      description: "Integrating third-party APIs and building custom RESTful APIs for web applications."
    },
    {
      id: 5,
      title: "UI/UX Optimization",
      description: "Enhancing user experience with modern design principles and performance optimization."
    },
    {
      id: 6,
      title: "Website Deployment",
      description: "Deploying fast and secure web applications using platforms like Vercel and Netlify."
    }
  ]

  return (
    <div className="services">
      
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="services-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Services