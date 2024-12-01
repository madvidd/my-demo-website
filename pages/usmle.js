// pages/usmle.js
import Link from 'next/link';  // Importing Link to allow navigation

export default function Usmle() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>USMLE Exam Information</h1>
      </header>
      
      <main>
        <h2>What is the USMLE?</h2>
        <p>
          The United States Medical Licensing Examination (USMLE) is a three-step exam
          for medical licensure in the United States. It assesses a physician's ability
          to apply knowledge, concepts, and principles, and to demonstrate fundamental patient-centered skills.
        </p>
        
        <h2>USMLE Exam Steps</h2>
        <ul>
          <li>Step 1: Basic Science Knowledge</li>
          <li>Step 2: Clinical Knowledge & Skills</li>
          <li>Step 3: Clinical Management</li>
        </ul>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link href="/">
          <a style={{ color: '#0070f3', textDecoration: 'none' }}>Back to Home</a>
        </Link>
      </footer>
    </div>
  );
}
