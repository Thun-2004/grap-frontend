import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faSquareFull,
} from "@fortawesome/free-solid-svg-icons";
/**
 * @param {{message: string}} prop
 * @returns {import("react").ReactNode}
 */
const ErrorPage = ({ message }) => (
  <div
    className="
      top-0 bottom-0 left-0 right-0 absolute flex
    "
  >
    <div className="h-2/4 w-full my-auto flex flex-col justify-evenly">
      <div className="flex flex-col items-center gap-y-4">
        <FontAwesomeIcon
          icon={faExclamationCircle}
          mask={faSquareFull}
          className="
            text-6xl  bg-gradient-to-r from-orange-300 to-red-500
            text-white
        "
        />
        <div
          className="
          text-4xl font-semibold bg-gradient-to-r from-orange-300
        to-red-500 bg-clip-text text-transparent
        "
        >
          Sorry
        </div>
        <div className="text-lg">{message}</div>
      </div>
      <div className="flex flex-col items-center">
        <div
          className="
          bg-gradient-to-r from-orange-300 to-red-500 rounded-xl p-2 
          text-white font-semibold hover:cursor-pointer drop-shadow-md
          hover:drop-shadow-xl mt-4
        "
        >
          Back to Homepage
        </div>
      </div>
    </div>
  </div>
);

export default ErrorPage;
