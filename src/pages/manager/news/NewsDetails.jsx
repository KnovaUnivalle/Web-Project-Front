import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../../utils/API';

const NewsDetails = () => {
	const [dataNew, setDataNew] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		API.get(`news/${id}/`).then((response) => {
			if (response.status === 200) {
				setDataNew(response.data);
				setLoading(false);
			}
		});
	}, []);
	return <>New</>;
};

export default NewsDetails;