// import {useRouterError} from  "react-router-dom";
import { useRouteError } from "react-router-dom";
const Error = () => {
    // const err = useRouterError();
    const err = useRouteError();
  return(   
  <div>

  <h1>OOPS</h1>
  <h2>SOMETHING WENT WRONG</h2>
  <h3>
    {err.status} : {err.statusText}
  </h3>
  </div>
  );
};

export default Error;