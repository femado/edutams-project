import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-content">
          <div className="welcome-text">
            <p className="welcome-label">Welcome</p>
            <p className="school-name">Greelife Grammar Adeolu Jr Secondary School</p>
            
            <h1 className="welcome-heading">
              Let's get your school portal ready in a few easy steps.
            </h1>
            
            <p className="welcome-description">
              From lesson planning to student engagement—everything in one place. 
              Teach better. Manage easier.
            </p>
          </div>
          
          <div className="welcome-footer">
            <span className="powered-by">Powered by</span>
            <span className="edutams-logo">EduTAMS</span>
          </div>
        </div>
        
        <div className="welcome-image">
          <div className="image-placeholder">
            <div className="students-illustration">
              <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="#f0f0f0"/>
                <rect x="80" y="180" width="140" height="200" rx="20" fill="#e8e8e8"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome