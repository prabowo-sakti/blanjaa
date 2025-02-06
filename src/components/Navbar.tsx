import { Input } from "@/components/ui/input";
import { Search } from "@/public/assets/svg/Search";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="grid w-full gap-1.5 items-center ">
        <div className="flex relative">
          <span className="relative top-10 left-64 text-4xl tracking-wider ">
            <Link href={"/"}>Blanjaa</Link>
          </span>
          <Input
            startIcon={Search}
            placeholder="Mau cari apa hari ini?"
            type="search"
          />
          <div className=" flex gap-5 relative top-10 right-20 justify-between ">
            <Link
              href={"/signup"}
              className="border mx-3 border-hitamSoft px-3 py-2 rounded-xl"
            >
              Sign Up
            </Link>

            <Link
              href={"/login"}
              className="border border-white text-white bg-hitamSoft px-5 py-2
              rounded-xl"
            >
              Log In
            </Link>
          </div>
        </div>

        <ul className="flex flex-row justify-center gap-5 border-b-2 pt-10 pb-5">
          <li>
            <Link href={"/contact"}>Kategori</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
