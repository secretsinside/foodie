import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();

    console.log(error);

    return (
        <div className="error-container">
            <h1>OOOPSS!!!</h1>
            <h3>Something went wrong!</h3>
            <h4>{error.status + ": " + error.statusText}</h4>
        </div>
    )
}

export default Error;