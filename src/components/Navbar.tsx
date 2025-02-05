import { Input } from "@/components/ui/input";
import { Search } from "@/public/assets/svg/Search";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="grid w-full gap-1.5 items-center ">
        <div className="relative">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 ">
            <Search className={"h-4 w-4"} />
          </div>
          <Input
            className="relative w-1/2 m-auto border-primary top-9 cursor-pointer"
            placeholder="Mau cari apa hari ini?"
            type="search"
          />
        </div>

        <ul className="flex flex-row justify-center gap-5 border-b-2 pt-10 pb-5">
          <li>
            <Link href={"/contact"}>Kategori</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/signup"} className="bg-biru text-white">
              Sign Up/Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
