import { useState } from "react";
import "./App.css";import "./App.css";

  function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const facilities = [
    "Library",
    "Computer Lab",
    "Physics Lab",
    "Chemistry Lab",
    "Biology Lab",
    "Design Thinking Lab",
    "Dance Lab",
    "Music Lab",
    "Language Lab",
    "Bus Transport",
    "Sports",
    "NCC",
  ];

  return (
    <div className="school-page">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span>DAFNE</span>
          <small>ASIATIC SCHOOL</small>
        </div>

        <button
  className="menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#facilities">Facilities</a>
          <a href="#admissions">Admissions</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-label">CBSE • CENTRAL AC CAMPUS</p>

          <h1>Dafne Asiatic School</h1>

          <h2>Learning Today. Shaping Tomorrow.</h2>

          <p>
            A modern learning environment where knowledge, creativity,
            character and confidence come together.
          </p>

          <div>
            <a className="button" href="#admissions">
              Admissions
            </a>

            <a className="button button-outline" href="#about">
              Explore Our School
            </a>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="section legacy" id="about">
        <p className="section-label">OUR LEGACY</p>

        <h2>40 Years of Educational Journey</h2>

        <p>
          Dafne Asiatic School is a part of Sri Shiridi Sai Institutions,
          carrying forward a 40-year educational journey that began with
          Sri Shiridi Sai School.
        </p>
      </section>

      {/* About */}
      <section className="section">
        <p className="section-label">ABOUT US</p>

        <h2>A New Generation of Learning</h2>

        <p>
          Dafne Asiatic School is a CBSE school offering education from
          Nursery to Grade 10, with a Central AC campus and facilities
          designed to support academic learning and creative development.
        </p>
      </section>

      {/* Academics */}
      <section className="section academics" id="academics">
        <p className="section-label">ACADEMICS</p>

        <h2>Nursery to Grade 10</h2>

        <div className="academic-cards">
          <div>
            <span>01</span>
            <h3>Early Years</h3>
            <p>Building curiosity, confidence and a love for learning.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Primary</h3>
            <p>Developing strong foundations across essential subjects.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Secondary</h3>
            <p>Preparing students for deeper learning and future goals.</p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section" id="facilities">
        <p className="section-label">CAMPUS FACILITIES</p>

        <h2>Learn Beyond the Classroom</h2>

        <div className="facilities">
          {facilities.map((facility) => (
            <div className="facility" key={facility}>
              <div className="facility-icon">✦</div>
              <h3>{facility}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Admissions */}
      <section className="section admissions" id="admissions">
        <p className="section-label">ADMISSIONS</p>

        <h2>Begin Your Child's Journey</h2>

        <p>
          Discover a learning environment designed to help students
          learn, explore, create and grow.
        </p>

        <a className="button" href="tel:9281030465">
          Call 92810 30465
        </a>
        <a
           className="button button-whatsapp"
            href="https://wa.me/919281030465"
            target="_blank"
            rel="noopener noreferrer"
            >
            WhatsApp Us
      </a>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <p className="section-label">CONTACT US</p>

        <h2>Dafne Asiatic School</h2>

        <p>
          Kavalagoyyi, Rajahmundry
        </p>

        <p>
        📞 <a href="tel:9281030465">92810 30465</a>
        </p>
        <form className="enquiry-form">
  <input
    type="text"
    placeholder="Parent's Name"
    required
  />

  <input
    type="tel"
    placeholder="Phone Number"
    required
  />

  <input
    type="text"
    placeholder="Student's Name"
    required
  />

  <select required defaultValue="">
    <option value="" disabled>
      Select Class
    </option>
    <option>Nursery</option>
    <option>Primary</option>
    <option>Middle School</option>
    <option>Grade 10</option>
  </select>

  <textarea
    placeholder="Your Enquiry"
    rows="5"
  ></textarea>

  <button type="submit" className="button">
    Submit Enquiry
  </button>
</form>
      </section>

      {/* Footer */}
      <footer>
        <h3>Dafne Asiatic School</h3>

        <p>CBSE • Central AC Campus</p>

        <p>Part of Sri Shiridi Sai Institutions</p>
      </footer>

    </div>
  );
}

export default App;
