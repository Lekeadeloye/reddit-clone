import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        404
      </p>
      <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
      <p className="max-w-md text-sm text-slate-600">
        The page you requested does not exist or may have been moved.
      </p>
      <Button asChild>
        <Link to="/">Back to home</Link>
      </Button>
    </main>
  );
};

export default NotFoundPage;
