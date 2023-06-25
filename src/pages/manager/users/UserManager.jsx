import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Search from '../../../components/forms/Search';
import Loader from '../../../components/tools/Loader';
import Users from '../../../components/tables/Users';
import API from '../../../utils/API';
import { USERS_MANAGER_PATH } from '../../../utils/PATH';
import InfoDialog from '../../../components/dialogs/InfoDialog';

const errorMessage = {
	title: 'Fallo en la carga de usuarios',
	body: 'Intenta Nuevamente',
};

const notFoundMessage = {
	title: 'No se han encontrado usuarios',
	body: 'Recarga o haz una búsqueda',
};

const UserManager = () => {
	const [dataUsers, setDataUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [reLoad, setReLoad] = useState(false);
	const [openDialogs, setOpenDialogs] = useState({ err: false, notFound: false });
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const openErr = () => {
		setOpenDialogs({ ...openDialogs, err: true });
	};

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const openNotFound = () => {
		setOpenDialogs({ ...openDialogs, notFound: true });
	};

	const closeNotFound = () => {
		setOpenDialogs({ ...openDialogs, notFound: false });
	};

	const doSearch = (search) => {
		setSearchParams({ q: search });
	};

	const navigateUser = (id) => {
		navigate(`${USERS_MANAGER_PATH}/${id}`);
	};

	const doReLoad = () => {
		setReLoad(!reLoad);
		doSearch('');
	};

	useEffect(() => {
		setLoading(true);
		const searchValue = searchParams.get('q') ?? '';
		const base = 'users/';
		const route = searchValue ? `${base}?q=${searchValue}` : `${base}?last=true`;
		API.get(route)
			.then((response) => {
				if (response.status === 200) {
					setDataUsers(response.data);
					setLoading(false);
				}
			})
			.catch((err) => {
				if (err.response.status === 404) {
					openNotFound();
				} else {
					openErr();
				}
				setLoading(false);
			});
	}, [searchParams, reLoad]);

	return (
		<>
			<header className='pt-3'>
				<h1 className='text-2xl'>Usuarios</h1>
			</header>
			<Search submitFunc={doSearch} />
			<div className='flex justify-center py-2'>
				{loading ? (
					<Loader size='2rem' />
				) : (
					<Button color='secondary' disableElevation onClick={doReLoad}>
						Recargar
					</Button>
				)}
			</div>
			<Users dataUsers={dataUsers} navigateUser={navigateUser} />
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorMessage} />
			<InfoDialog close={closeNotFound} open={openDialogs.notFound} message={notFoundMessage} />
		</>
	);
};

export default UserManager;