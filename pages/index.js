// pages/index.js
import Link from 'next/link'; // Import Link from next/link

export default function Home() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>
        This is a demo website. To take the <strong>USMLE Exam</strong>, visit the <Link href="/usmle"><a>USMLE Exam Page</a></Link>.
      </p>
      <p>
        For a smart exam, check out the <Link href="/smart-exam"><a>Smart Exam</a></Link> page.
      </p>
    </div>
  );
}
