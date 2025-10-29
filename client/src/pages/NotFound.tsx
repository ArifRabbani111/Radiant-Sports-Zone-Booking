import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="pt-16 flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 text-primary hover:underline">
        Go back to Home
      </Link>
    </main>
  );
}

export default NotFound;
