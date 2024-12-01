// pages/index.js
import styles from '../styles/Home.module.css';
import Link from 'next/link';  // Import Link for navigation

export default function Home() {
  // Example dynamic list data
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Demo Website</h1>
        <nav>
          <ul className={styles.navList}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main className={styles.main}>
        <h2>Here's a dynamic list of fruits:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Add the link to the USMLE page */}
        <div className={styles.link}>
          <Link href="/usmle">
            <a className={styles.linkButton}>Learn more about the USMLE Exam</a>
          </Link>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p>Created with ❤️ by Your Name</p>
      </footer>
    </div>
  );
}
