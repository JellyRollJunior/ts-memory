import { Link, useLocation } from 'react-router-dom';

const ErrorContent = ({ className = '' }) => {
  const location = useLocation();

  return (
    <div
      className={`text-sand-beige-dark border-sand-beige w-full max-w-xl rounded-3xl border-3 bg-white/40 px-10 pt-5 pb-8 text-center ${className}`}
    >
      <h2 className="text-center text-xl font-bold">
        {location.pathname != '/' ? '404 Page Found' : 'I Got Nothin!'}
      </h2>
      <p className="my-10">
        {location.pathname != '/'
          ? "You've reached an invalid page."
          : "Wow you've reached an unexpected error!"}
      </p>
      <Link
        className="primary-button mx-auto mt-3 block w-fit px-7 py-1"
        to="/"
      >
        Return Home
      </Link>
    </div>
  );
};

export { ErrorContent };
