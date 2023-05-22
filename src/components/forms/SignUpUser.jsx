import { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { userSchema } from '../../schemas/signUpSchema';
import API from '../../utils/API';
import InfoDialog from '../dialogs/InfoDialog';
import FormikInput from '../inputs/FormikInput';

const successMessage = {
	title: 'Registro exitoso',
	body: 'Ya puedes iniciar sesión.',
};
const errorMessage = {
	title: 'Fallo en el registro',
	body: 'El Correo ya se encuentra registrado.',
};

const SignUpUser = ({ rol }) => {
	const [openDialogs, setOpenDialogs] = useState({ err: false, success: false });
	const navigate = useNavigate();

	const openErr = () => {
		setOpenDialogs({ ...openDialogs, err: true });
	};

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const openSuccess = () => {
		setOpenDialogs({ ...openDialogs, success: true });
	};

	const closeSuccess = () => {
		setOpenDialogs({ ...openDialogs, success: false });
		navigate('/signin');
	};

	const handleSubmit = async (values) => {
		API.post('user/register/', values)
			.then((response) => {
				if (response.status === 201) {
					openSuccess();
				}
			})
			.catch((err) => {
				if (err.response.status === 400) {
					openErr();
				}
			});
	};

	return (
		<Formik
			initialValues={{
				name: '',
				last_name: '',
				email: '',
				password: '',
				rol: rol,
				birth_date: '',
			}}
			onSubmit={handleSubmit}
			validationSchema={userSchema}
		>
			<Form className='ring-4 shadow-xl rounded-xl ring-gray-400 p-10'>
				<h1 className='text-center text-3xl font-semibold font-serif text-gray-500'>
					Registro de usuario
				</h1>
				<FormikInput name='name' type='text' label='Nombre' placeholder='Apellidos' />
				<FormikInput name='last_name' type='text' label='Apellidos' placeholder='Apellidos' />
				<FormikInput
					name='birth_date'
					type='date'
					label='Fecha de Nacimiento'
					placeholder='Fecha de Nacimiento'
				/>
				<FormikInput
					name='email'
					type='email'
					label='Correo Electronico'
					placeholder='Correo Electronico'
				/>
				<FormikInput name='password' type='password' label='Contraseña' placeholder='Contraseña' />
				<div className='flex justify-center'>
					<Button
						type='submit'
						variant='contained'
						disableElevation
						style={{ background: '#6EB500', marginTop: '1rem' }}
					>
						Crear Usuario
					</Button>
				</div>
				<InfoDialog close={closeErr} open={openDialogs.err} message={errorMessage} />
				<InfoDialog close={closeSuccess} open={openDialogs.success} message={successMessage} />
			</Form>
		</Formik>
	);
};

export default SignUpUser;
