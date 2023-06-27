import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material';
import InfoDialog from '../../../components/dialogs/InfoDialog';
import Search from '../../../components/forms/Search';
import Loader from '../../../components/tools/Loader';
import { ADD_USER_ADMIN_PATH, EDIT_USER_ADMIN_PATH, USERS_ADMIN_PATH } from '../../../utils/PATH';
import Users from '../../../components/tables/Users';
import API from '../../../utils/API';
import { errorNotFoundUser, errorUsers } from '../../../utils/MSG';

const UserAdmin = () => {
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
		navigate(`${USERS_ADMIN_PATH}/${id}`);
	};

	const navigateEdit = (id) => {
		navigate(`${EDIT_USER_ADMIN_PATH}/${id}`);
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
			<header className='pt-3 flex justify-between'>
				<h1 className='text-2xl'>Usuarios</h1>
				<Button
					color='secondary'
					variant='contained'
					disableElevation
					onClick={() => navigate(ADD_USER_ADMIN_PATH)}
				>
					Nueva usuario
				</Button>
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
			<Users dataUsers={dataUsers} navigateUser={navigateUser} navigateEdit={navigateEdit} />
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorUsers} />
			<InfoDialog close={closeNotFound} open={openDialogs.notFound} message={errorNotFoundUser} />
		</>
	);
};

export default UserAdmin;
