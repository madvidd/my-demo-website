import Link from 'next/link'; // Import Link for routing

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
            <a>Learn more about the USMLE Exam</a> {/* Link to USMLE page */}
          </Link>
        </div>

        {/* Link to Smart Exam page */}
        <div>
          <Link href="/smart-exam">
            <a>Start Smart Exam</a> {/* Link to Smart Exam page */}
          </Link>
        </div>
      </main>
    </div>
  );
}
