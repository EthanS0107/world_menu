"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="relative group">
          <motion.span
            className="text-2xl font-black bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent block"
            whileHover={{ scale: 1.05 }}
          >
            Menus du Monde
          </motion.span>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-linear-to-r from-blue-600 to-teal-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 font-medium text-gray-600">
          <NavLink
            href={
              session?.user?.isActive || session?.user?.isAdmin ? "/menu" : "/"
            }
            currentPath={pathname}
          >
            Accueil
          </NavLink>
          <NavLink href="/about" currentPath={pathname}>
            À propos
          </NavLink>
          {session && (
            <Link href="/profile" className="text-indigo-600 hover:underline">
              Mon Profil
            </Link>
          )}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/propose"
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all text-sm font-bold tracking-wide"
            >
              Proposer une idée
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

// Helper Component for Links with animated underline
const NavLink = ({
  href,
  currentPath,
  children,
}: {
  href: string;
  currentPath: string;
  children: React.ReactNode;
}) => {
  const isActive = currentPath === href;

  return (
    <Link href={href} className="relative group py-2">
      <span
        className={`transition-colors duration-300 ${isActive ? "text-blue-600 font-bold" : "group-hover:text-blue-600"}`}
      >
        {children}
      </span>
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
        />
      )}
      {!isActive && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 rounded-full transition-all duration-300 group-hover:w-full"></span>
      )}
    </Link>
  );
};

export default Navbar;
