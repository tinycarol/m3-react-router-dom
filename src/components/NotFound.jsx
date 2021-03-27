import { Redirect } from "react-router";

export default function NotFound() {
	return <h1>NotFound 😞<Redirect to="/home" /></h1>
}