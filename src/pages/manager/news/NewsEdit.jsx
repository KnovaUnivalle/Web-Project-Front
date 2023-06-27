import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormContainter from '../../../components/containers/FormContainter';
import News from '../../../components/forms/News';
import API from '../../../utils/API';
import Loader from '../../../components/tools/Loader';
import { compareDataToUpdate } from '../../../utils/AUXILIAR';
import { NEWS_MANAGER_PATH } from '../../../utils/PATH';
import InfoDialog from '../../../components/dialogs/InfoDialog';
import { errorGeneralEdit } from '../../../utils/MSG';

const NewsEdit = () => {
	const [dataNew, setDataNew] = useState({});
	const [loading, setLoading] = useState(true);
	const [openDialogs, setOpenDialogs] = useState({ err: false });
	const { id } = useParams();
	const navigate = useNavigate();

	const openErr = () => {
		setOpenDialogs({ ...openDialogs, err: true });
	};

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const handleSubmit = (data) => {
		const dataFilter = compareDataToUpdate(data, dataNew);
		API.put(`news/update/${id}/`, dataFilter)
			.then((response) => {
				if (response.status === 200) {
					navigate(NEWS_MANAGER_PATH);
				}
			})
			.catch((err) => {
				openErr();
			});
	};

	useEffect(() => {
		API.get(`news/${id}/`)
			.then((response) => {
				if (response.status === 200) {
					setDataNew(response.data);
					setLoading(false);
				}
			})
			.catch((err) => {
				openErr();
			});
	}, []);

	return (
		<FormContainter height='h-5/6'>
			{loading ? (
				<div className='m-auto'>
					<Loader />
				</div>
			) : (
				<>
					<News
						submitFunc={handleSubmit}
						dataNew={dataNew}
						textButton='Guardar'
						title='Editar Noticia'
					/>
					<div className='py-3'>
						<Button onClick={() => navigate(-1)}>Regresar</Button>
					</div>
				</>
			)}
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorGeneralEdit} />
		</FormContainter>
	);
};

export default NewsEdit;
