import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Custom CSS for your page
import stdpro from './stdpro.png';
import performtrack from './performtrack.png';
import collab from './collab.png';

const Home = () => {
  return (
    <div className='text-center'>
      {/* Hero Section */}
      <header className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Welcome to Scholarly</h1>
          <p>Your one-stop platform for managing student data efficiently</p>
          <a href="#students" className="btn btn-light btn-lg mt-3">
            <Link className="nav-link active" aria-current="page" to={"/view-students"}>
              View All Students
            </Link>
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container">
          <h2 className="text-center mb-4">Key Features</h2>
          <div className="row">
            {/* Student Profiles Card */}
            <div className="col-md-4">
              <div className="card feature-card">
                <img src={stdpro} className="card-img-top" alt="Student Profiles"/>
                <div className="card-body">
                  <i className="fas fa-user-graduate fa-3x mb-3 text-primary"></i>
                  <h4 className="card-title">Student Profiles</h4>
                  <p className="card-text">View and manage comprehensive student profiles including grades, attendance, and more.</p>
                </div>
              </div>
            </div>
            {/* Performance Tracking Card */}
            <div className="col-md-4">
              <div className="card feature-card">
                <img src={performtrack} className="card-img-top" alt="Performance Tracking"/>
                <div className="card-body">
                  <i className="fas fa-chart-line fa-3x mb-3 text-primary"></i>
                  <h4 className="card-title">Performance Tracking</h4>
                  <p className="card-text">Easily track student performance over time with detailed reports and insights.</p>
                </div>
              </div>
            </div>
            {/* Collaborate Card */}
            <div className="col-md-4">
              <div className="card feature-card">
                <img src={collab}  className="card-img-top" alt="Collaborate"/>
                <div className="card-body">
                  <i className="fas fa-users fa-3x mb-3 text-primary"></i>
                  <h4 className="card-title">Collaborate</h4>
                  <p className="card-text">Collaborate with other educators, administrators, and students for better communication and management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* About Section in a Box */}
    <section className="about py-5">
        <div className="container">
          <div className="card about-card">
            <div className="card-body">
              <h2>About Scholarly</h2>
              <p className="lead">
                Scholarly is a modern and intuitive platform designed to help you manage and access detailed student profiles, track performance, and collaborate with ease.
              </p>
              <p>
                Our mission is to streamline student management for educators, making it simple to access the information they need. Whether you’re an educator, admin, or student, Scholarly empowers you with tools to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white text-center py-3">
        <p>&copy; 2024 Scholarly. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
