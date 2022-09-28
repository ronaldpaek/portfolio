import { client } from '@client';

export const fetchData = async (type, setState) => {
	const query = `*[_type == '${type}']`;
	try {
		const data = await client.fetch(query);
		setState(data);
	} catch (err) {
		console.error(err);
	}
};
