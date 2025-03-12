import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <Link href = "/week-2" style={{ display: "block" }}>Week 2</Link>
    <Link href = "/week-3" style={{ display: "block" }}>Week 3</Link>
    <Link href = "/week-4" style={{ display: "block" }}>Week 4</Link>
    <Link href = "/week-5" style={{ display: "block" }}>Week 5</Link>
    <Link href = "/week-6" style={{ display: "block" }}>Week 6</Link>
    <Link href = "/week-7" style={{ display: "block" }}>Week 7</Link>
    </main>
  );
}
