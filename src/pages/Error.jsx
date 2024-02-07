import { Link, useRouteError } from "react-router-dom";
import NotFound from "../assets/not-found.svg";
const Error = () => {
  const error = useRouteError();
  //* fOR MORE INFO ON ERROR
  console.log(error);
  if (error.status == 404) {
    return (
      <div className="flex flex-col justify-center items-center w-screen">
        <img className="w-1/3" src={NotFound} alt="" />
        <h3 className="text-4xl mt-10">Ohh ! Page not found</h3>
        <p className="text-2xl mt-5">
          We can't seem to find the page you are looking for
        </p>
        <Link
          className="text-blue-500 font-semibold mt-5 text-xl"
          to="/dashboard"
        >
          Go back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="error">
      <h1>Error Page</h1>
      <Link className="text-blue-500" to="/">
        Go back Home
      </Link>
    </div>
  );
};
export default Error;
