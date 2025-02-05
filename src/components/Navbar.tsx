import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex flex-row justify-center gap-5 border border-b-2 pt-10 pb-5">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/signup"}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
