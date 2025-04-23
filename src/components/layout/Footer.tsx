import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-bold font-poppins text-blue-600 dark:text-blue-400 mb-6"
          >
            Arth V.
          </Link>
          
          {/* Copyright */}
          <div className="text-gray-500 dark:text-gray-400 text-center">
            <p>
              &copy; {currentYear} Arth Vala. All rights reserved.
            </p>
            <p className="mt-2 text-sm">
              Made with ❤️ by Vibe Coding/ Prompt Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 