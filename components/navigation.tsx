"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  const [cnt, setCnt] = useState(0);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "😀" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "😀" : ""}
        </li>
        <button onClick={() => setCnt((c) => c + 1)}>{cnt}</button>
      </ul>
    </nav>
  );
}
