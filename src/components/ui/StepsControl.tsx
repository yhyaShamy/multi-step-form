import { Link } from "react-router-dom";
import { TControl } from "../../types/global";

export default function StepsControl({
  myFormik,
  prev,
  next,
  isFinished,
}: TControl) {
  return (
    <>
      <div className="absolute top-[99%] md:static md:mt-auto w-[100%] md:w-auto  right-0">
        <div className="w-[90%] md:w-auto mx-auto md:mx-0">
          <div className="flex items-center justify-between flex-1 ">
            {prev ? (
              <Link
                to={prev}
                className="text-xl text-secondary-900 transition-colors duration-500 hover:text-primary-900 font-bold"
              >
                Go Back
              </Link>
            ) : (
              ""
            )}

            {myFormik ? (
              <button
                type="submit"
                className="min-w-40 min-h-14 bg-primary-900 rounded-lg text-xl text-secondary-500 disabled:bg-primary-900/70 disabled:cursor-not-allowed cursor-pointer ms-auto hover:bg-primary-900/85 transition-colors duration-500
      "
                disabled={!myFormik.isValid || !myFormik.dirty}
                onSubmit={() => myFormik.handleSubmit()}
              >
                Next Step
              </button>
            ) : (
              <Link to={next ? next : ""}>
                <button
                  className={`min-w-40 min-h-14 ${
                    isFinished
                      ? "bg-primary-800 hover:bg-primary-800/85"
                      : "bg-primary-900 hover:bg-primary-900/85"
                  } rounded-lg text-xl text-secondary-500 disabled:bg-primary-900/70 disabled:cursor-not-allowed cursor-pointer ms-auto  transition-colors duration-500
      `}
                  disabled={!next}
                >
                  {isFinished ? "Confirm" : "Next Step"}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
