const Footer = () => {
  const currentYear = new Date().getFullYear();
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'ChefAI';

  return (
    <footer className="bg-gray-100 text-gray-700 py-6 text-center border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p>&copy; {currentYear} {appName}. All rights reserved.</p>
        {/* You can add more links or information here if needed */}
        {/* Example: <p>Powered by AI</p> */}
      </div>
    </footer>
  );
};

export default Footer; 