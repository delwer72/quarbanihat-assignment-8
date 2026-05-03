

"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/qurbani.png";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-4">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h3 className="font-black text-lg">Qurbani-HAT</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><Link className="font-bold" href="/">Home</Link></li>
          <li><Link className="font-bold" href="/showallanimals">Animals</Link></li>
          <li><Link className="font-bold" href="/profile">Profile</Link></li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex gap-4 items-center">
          {!user ? (
            <>
              <Link href="/register" className="font-bold">Register</Link>
              <Link href="/login" className="font-bold">Login</Link>
            </>
          ) : (
            <div className="flex gap-3 items-center">
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="sm" color="danger">
                SignOut
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm">

          <Link href="/">Home</Link>
          <Link href="/showallanimals">Animals</Link>
          <Link href="/profile">Profile</Link>

          {!user ? (
            <>
              <Link href="/register">Register</Link>
              <Link href="/login">Login</Link>
            </>
          ) : (
            <>
              <Button onClick={handleSignOut} size="sm" color="danger">
                SignOut
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;