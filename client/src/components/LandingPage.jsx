import { useMemo, useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/LandingPage.css';

const heroStats = [
  { label: 'Trusted Patients', value: '120K+' },
  { label: 'Expert Doctors', value: '320+' },
  { label: 'Daily Appointments', value: '4.5K' },
];

const missionContent = [
  {
    title: 'Emergency Care',
    description: 'Rapid-response trauma & critical care teams on standby 24/7.',
  },
  {
    title: '24x7 Doctors',
    description: 'On-call specialists ensure round-the-clock consultation access.',
  },
  {
    title: 'Advanced Diagnostics',
    description: 'AI-enabled imaging, labs and screening for faster diagnosis.',
  },
  {
    title: 'Tele-Consultation',
    description: 'Secure video consultations and at-home care coordination.',
  },
];

const specialties = [
  'Cardiology',
  'Neurology',
  'Pediatrics',
  'Orthopedics',
  'Dermatology',
  'Gynecology',
  'ENT',
  'General Medicine',
];

const doctors = [
  {
    name: 'Dr. Amelia Carter',
    specialty: 'Cardiologist',
    experience: '15 yrs experience',
    photo:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&w=600',
  },
  {
    name: 'Dr. Leo Matthews',
    specialty: 'Neurologist',
    experience: '12 yrs experience',
    photo:
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&w=600',
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Pediatrician',
    experience: '10 yrs experience',
    photo:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&w=600',
  },
  {
    name: 'Dr. Ethan Reyes',
    specialty: 'Orthopedic Surgeon',
    experience: '18 yrs experience',
    photo:
      'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&w=600',
  },
];

const testimonials = [
  {
    quote:
      'Newton Hospital helped my family navigate an emergency with precision and empathy. Appointments are seamless and quick.',
    name: 'Sophia Williams',
  },
  {
    quote:
      'The tele-consultation experience was intuitive and secure. Doctors follow up proactively.',
    name: 'Marcus Chen',
  },
  {
    quote:
      'Real-time appointment tracking removed all waiting anxiety. Highly recommend the pediatric team.',
    name: 'Ananya Verma',
  },
];

const LandingPage = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = useMemo(
    () => testimonials[testimonialIndex],
    [testimonialIndex]
  );

  return (
    <div className="landing-page">
      <Navbar />
      <header className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Newton Hospital</p>
          <h1>Advanced Healthcare. Trusted Care.</h1>
          <p className="subtitle">
            Smart appointment management, AI-enabled diagnostics, and compassionate
            specialists in one integrated platform.
          </p>
          <div className="hero-actions">
            <button className="btn primary">Book Appointment</button>
            <button className="btn outline">Login</button>
            <button className="btn ghost">View Doctors</button>
          </div>
          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="value">{stat.value}</p>
                <p className="label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass-card">
            <p>Live Availability</p>
            <h3>32 doctors online</h3>
          </div>
          <div className="glass-card">
            <p>Next appointment</p>
            <h3>09:30 AM • Cardiology</h3>
          </div>
          <div className="hero-image" aria-hidden />
        </div>
      </header>

      <section className="about-section">
        <div className="about-text">
          <p className="eyebrow">About Newton Hospital</p>
          <h2>Mission, Vision & Values</h2>
          <p>
            We integrate technology with patient-centric care to deliver proactive,
            predictive and personalized health journeys.
          </p>
        </div>
        <div className="about-grid">
          {missionContent.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="specialties-section">
        <div className="section-header">
          <p className="eyebrow">Featured Specialties</p>
          <h2>Centres of Excellence</h2>
        </div>
        <div className="chips-grid">
          {specialties.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="doctors-section">
        <div className="section-header">
          <p className="eyebrow">Meet Our Doctors</p>
          <h2>Leaders in Smart Healthcare</h2>
        </div>
        <div className="card-grid">
          {doctors.map((doc) => (
            <article key={doc.name} className="doctor-card">
              <img src={doc.photo} alt={`${doc.name}`} loading="lazy" />
              <div className="doctor-info">
                <h3>{doc.name}</h3>
                <p>{doc.specialty}</p>
                <p>{doc.experience}</p>
                <button className="btn ghost">View Profile</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="section-header">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Smart, Secure, Always-On</h2>
        </div>
        <ul className="why-grid">
          <li>
            <span className="icon">⚡</span>
            Seamless booking
          </li>
          <li>
            <span className="icon">🩺</span>
            Live doctor availability
          </li>
          <li>
            <span className="icon">🔐</span>
            Secure medical data
          </li>
          <li>
            <span className="icon">📡</span>
            Real-time appointment tracking
          </li>
        </ul>
      </section>

      <section className="testimonials-section">
        <div className="section-header">
          <p className="eyebrow">Patient Stories</p>
          <h2>Testimonials</h2>
        </div>
        <div className="testimonial-card">
          <p className="quote">“{activeTestimonial.quote}”</p>
          <p className="author">— {activeTestimonial.name}</p>
          <div className="dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={idx === testimonialIndex ? 'active' : ''}
                onClick={() => setTestimonialIndex(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <h3>Newton Hospital</h3>
          <p>
            Smart Healthcare & Appointment Management System delivering proactive care
            for families worldwide.
          </p>
          <p>24x7 Helpline: +1-800-NEWTCARE</p>
          <p>Email: support@newtonhospital.com</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Patients</li>
            <li>Doctors</li>
            <li>Admin</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>123 Smart Health Ave, NY</li>
            <li>+1 222 555 0101</li>
            <li>careers@newtonhospital.com</li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

