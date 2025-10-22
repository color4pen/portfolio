export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {currentYear} Portfolio. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Built with React, TypeScript, Tailwind CSS & Vite
        </p>
      </div>
    </footer>
  );
}
