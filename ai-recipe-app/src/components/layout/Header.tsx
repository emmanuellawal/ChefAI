import Link from 'next/link';

const Header = () => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'ChefAI';

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
            {appName}
          </Link>
        </div>
        {/* Placeholder for future navigation links, e.g., Saved Recipes, Profile */}
        {/* <div className="flex items-center space-x-4">
          <Link href="/recipes/saved" className="hover:text-gray-300 transition-colors">
            Saved Recipes
          </Link>
          <Link href="/profile" className="hover:text-gray-300 transition-colors">
            Profile
          </Link>
        </div> */}
      </nav>
    </header>
  );
};

export default Header; 