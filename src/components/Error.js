import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return(
        <div>
            <h4>Oops!!</h4>
            <h4>Something Went Wrong!</h4>
            <h2>{err.status}: {err.statusText}</h2>
            <p><i>{err.data}</i></p>
        </div>
    )
}

export default Error;