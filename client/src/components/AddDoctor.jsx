import '../styles/Dashboard.css';

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

const AddDoctor = () => (
  <section className="add-doctor-card">
    <header>
      <h2>Add Doctor</h2>
      <p>Onboard new specialists and configure their schedules.</p>
    </header>
    <form className="add-doctor-form">
      <div className="form-row">
        <label>
          Name
          <input type="text" placeholder="Dr. John Doe" required />
        </label>
        <label>
          Email
          <input type="email" placeholder="doctor@newton.com" required />
        </label>
      </div>

      <div className="form-row">
        <label>
          Speciality
          <select defaultValue="">
            <option value="" disabled>
              Select specialty
            </option>
            {specialties.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          Experience (years)
          <input type="number" min="0" placeholder="10" />
        </label>
      </div>

      <div className="form-row">
        <label>
          Consultation Fees
          <input type="number" min="0" placeholder="150" />
        </label>
        <label>
          Upload Image
          <input type="file" accept="image/*" />
        </label>
      </div>

      <label>
        Description
        <textarea rows="4" placeholder="Specialized in minimally invasive procedures..." />
      </label>

      <div className="form-actions">
        <button type="reset" className="btn ghost">
          Reset
        </button>
        <button type="submit" className="btn primary">
          Save Doctor
        </button>
      </div>
    </form>
  </section>
);

export default AddDoctor;

