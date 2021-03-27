export function parseQueryParameters(queryString) {
	return queryString.replace("?", "").split("&").reduce((acc, current) => {
		const [key, value] = current.split("=");
		return { ...acc, [key]: value };
	}, {});
} 