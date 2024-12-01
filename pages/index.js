// pages/index.js
import Link from 'next/link';  // Make sure this import is correct

export default function Home() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <header>
        <h1>Welcome to My Demo Website</h1>
      </header>

      <main>
        <h2>Here's a dynamic list of fruits:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Link to USMLE Exam page */}
        <div>
          <Link href="/usmle">
            <a>Learn more about the USMLE Exam</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
