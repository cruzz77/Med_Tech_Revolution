import { useState } from 'react';
import '../styles/Navbar.css';

const menus = {
  global: [
    { label: 'Home', path: '/' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Departments', path: '/departments' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  user: [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'My Appointments', path: '/appointments' },
    { label: 'My Profile', path: '/profile' },
  ],
  doctor: [
    { label: 'Doctor Dashboard', path: '/doctor' },
    { label: 'My Schedule', path: '/doctor/schedule' },
    { label: 'Appointments', path: '/doctor/appointments' },
    { label: 'Profile', path: '/doctor/profile' },
  ],
  admin: [
    { label: 'Admin Dashboard', path: '/admin' },
    { label: 'Manage Doctors', path: '/admin/doctors' },
    { label: 'Manage Users', path: '/admin/users' },
    { label: 'Appointments Panel', path: '/admin/appointments' },
    { label: 'Add Doctor', path: '/admin/add-doctor' },
  ],
};

const ctaButtons = {
  global: [
    { label: 'Login / Signup', path: '/auth' },
    { label: 'Book Now', path: '/book', type: 'primary' },
  ],
  user: [{ label: 'Logout', path: '/logout', type: 'outline' }],
  doctor: [{ label: 'Logout', path: '/logout', type: 'outline' }],
  admin: [{ label: 'Logout', path: '/logout', type: 'outline' }],
};

const Navbar = ({ role = 'global' }) => {
  const [open, setOpen] = useState(false);

  const renderMenu = (items) =>
    items.map((item) => (
      <a key={item.label} href={item.path}>
        {item.label}
      </a>
    ));

  return (
    <nav className="navbar">
      <div className="logo">Newton Hospital</div>

      <button
        className="burger"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        <div className="primary-links">
          {renderMenu(menus.global)}
          {role !== 'global' && renderMenu(menus[role])}
        </div>
        <div className="cta-links">
          {ctaButtons[role].map((btn) => (
            <a
              key={btn.label}
              href={btn.path}
              className={`btn ${btn.type || 'ghost'}`}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

