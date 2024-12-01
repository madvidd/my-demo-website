import Link from 'next/link'; // Importing the Link component for navigation

export default function Home() {
  // Sample dynamic list of items
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
            <a>Learn more about the USMLE Exam</a> {/* This is the clickable link */}
          </Link>
        </div>

        {/* Link to Smart Exam page */}
        <div>
          <Link href="/smart-exam">
            <a>Start Smart Exam</a> {/* This is the clickable link */}
          </Link>
        </div>
      </main>
    </div>
  );
}
