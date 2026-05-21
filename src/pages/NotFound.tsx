import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-ink"
      data-testid="not-found-page"
    >
      <div className="text-center p-10">
        <div className="display-font text-7xl md:text-9xl font-black text-cyber-gradient mb-4">
          404
        </div>
        <div className="mono-font text-cyan tracking-[0.4em] text-sm mb-3">
          // SIGNAL.LOST
        </div>
        <p className="body-font text-muted-foreground mb-8">
          The route <span className="text-cyan mono-font">{location.pathname}</span>{" "}
          does not exist.
        </p>
        <a
          href="/"
          className="btn-cyber inline-flex"
          data-testid="not-found-home-link"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
