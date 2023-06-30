import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignUpUser from '../../../components/forms/SignUpUser';
import API from '../../../utils/API';
import FormContainter from '../../../components/containers/FormContainter';
import InfoDialog from '../../../components/dialogs/InfoDialog';
import { errorRegisterUser, errorUser } from '../../../utils/MSG';
import AuthDialog from '../../../components/dialogs/AuthDialog';

const UserNew = () => {
	const [openDialogs, setOpenDialogs] = useState({
		err: false,
		errGen: false,
		noAuthenticated: false,
		NoAuthorized: false,
	});
	const navigate = useNavigate();

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};
	const closeErrGen = () => {
		setOpenDialogs({ ...openDialogs, errGen: false });
	};

	const handleSubmit = (values) => {
		API.post('user/register/', values)
			.then((response) => {
				if (response.status === 201) {
					navigate(-1);
				}
			})
			.catch((err) => {
				if (err.response) {
					switch (err.response.status) {
						case 401:
							setOpenDialogs({ ...openDialogs, noAuthenticated: true });
							break;
						case 403:
							setOpenDialogs({ ...openDialogs, NoAuthorized: true });
							break;
						default:
							setOpenDialogs({ ...openDialogs, err: true });
							break;
					}
				} else {
					setOpenDialogs({ ...openDialogs, errGen: true });
				}
			});
	};
	return (
		<FormContainter>
			<SignUpUser handleSubmit={handleSubmit} admin={true} />
			<div className='pt-3'>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
			</div>
			<InfoDialog close={closeErr} open={openDialogs.err} message={errorRegisterUser} />
			<InfoDialog close={closeErrGen} open={openDialogs.errGen} message={errorUser} />
			<AuthDialog
				noAuthenticated={openDialogs.noAuthenticated}
				NoAuthorized={openDialogs.NoAuthorized}
			/>
		</FormContainter>
	);
};

export default UserNew;
