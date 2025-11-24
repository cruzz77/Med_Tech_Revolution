import '../styles/Dashboard.css';

const statCards = [
  { label: 'Total Doctors', value: 320, trend: '+12 this week' },
  { label: 'Total Patients', value: '120K', trend: '+1.2K this month' },
  { label: 'Today’s Appointments', value: 450, trend: '92 completed' },
  { label: 'Revenue', value: '$540K', trend: 'Projected' },
];

const doctorsTable = [
  { name: 'Dr. Amelia Carter', specialty: 'Cardiology', status: 'Online' },
  { name: 'Dr. Leo Matthews', specialty: 'Neurology', status: 'In Surgery' },
  { name: 'Dr. Priya Sharma', specialty: 'Pediatrics', status: 'Available' },
];

const usersTable = [
  { name: 'Sophia Williams', role: 'Patient', lastVisit: 'Nov 20' },
  { name: 'Marcus Chen', role: 'Patient', lastVisit: 'Nov 18' },
  { name: 'Oliver Stone', role: 'Patient', lastVisit: 'Nov 16' },
];

const appointmentsTable = [
  { patient: 'Luna Smith', doctor: 'Dr. Carter', time: '09:30 AM', status: 'Confirmed' },
  { patient: 'Noah Blake', doctor: 'Dr. Matthews', time: '10:15 AM', status: 'Pending' },
  { patient: 'Mia Flores', doctor: 'Dr. Reyes', time: '11:00 AM', status: 'Completed' },
];

const AdminDashboard = () => (
  <div className="dashboard">
    <aside className="sidebar">
      <h2>Newton Admin</h2>
      <ul>
        <li className="active">Overview</li>
        <li>Doctors</li>
        <li>Patients</li>
        <li>Appointments</li>
        <li>Billing</li>
        <li>Settings</li>
      </ul>
    </aside>

    <main className="dashboard-content">
      <header className="topbar">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Real-time overview of hospital operations</p>
        </div>
        <div className="topbar-actions">
          <input type="search" placeholder="Search" />
          <button className="btn primary">Add Doctor</button>
        </div>
      </header>

      <section className="stats-grid">
        {statCards.map((card) => (
          <article key={card.label}>
            <p className="overline">{card.label}</p>
            <h3>{card.value}</h3>
            <p className="trend">{card.trend}</p>
          </article>
        ))}
      </section>

      <section className="tables-grid">
        <article>
          <header>
            <h3>Doctors</h3>
            <button className="link">View all</button>
          </header>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Specialty</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {doctorsTable.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{row.specialty}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article>
          <header>
            <h3>Users</h3>
            <button className="link">View all</button>
          </header>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Last Visit</th>
              </tr>
            </thead>
            <tbody>
              {usersTable.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{row.role}</td>
                  <td>{row.lastVisit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>

      <section className="appointments-section">
        <header>
          <h3>Appointments</h3>
          <button className="link">Manage</button>
        </header>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointmentsTable.map((row) => (
              <tr key={row.patient}>
                <td>{row.patient}</td>
                <td>{row.doctor}</td>
                <td>{row.time}</td>
                <td>
                  <span className={`status ${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  </div>
);

export default AdminDashboard;

