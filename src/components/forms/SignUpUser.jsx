import { ErrorMessage, Field, Form, Formik } from 'formik';
import { userSchema } from '../../schemas/signUpSchema';
import { Button, FormGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import API from '../../utils/API';
import { useState } from 'react';
import ErrorDialog from '../dialogs/ErrorDialog';

const styles = {
	errorMessage: 'text-red-700 font-serif rounded-sm',
	formGroup: 'my-3 lg:my-1',
	field:
		'p-1 my-1 border rounded border-slate-300 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:shadow-outline focus:outline-none',
};

const errorMessage = {
	title: 'Fallo en el registro',
	body: 'El Correo ya se encuentra registrado.',
};

const SignUpUser = () => {
	const [openDialogs, setOpenDialogs] = useState({ err: false, info: false });
	const navigate = useNavigate();

	const openErr = () => {
		setOpenDialogs({ ...openDialogs, err: true });
	};

	const closeErr = () => {
		setOpenDialogs({ ...openDialogs, err: false });
	};

	const openInfo = () => {
		setOpenDialogs({ ...openDialogs, info: true });
	};

	const closeInfo = () => {
		setOpenDialogs({ ...openDialogs, info: false });
		navigate('/signin');
	};

	const handleSubmit = async (values) => {
		API.post('user/register/', values)
			.then((response) => {
				if (response.status === 201) {
					navigate('/signin');
				}
			})
			.catch((err) => {
				if (err.response.status === 400) {
					openErr();
				}
			});
	};

	return (
		<div className='flex flex-col justify-center align-middle m-auto w-3/4 min-h-screen md:w-2/3 lg:w-1/3'>
			<Formik
				initialValues={{
					name: '',
					last_name: '',
					email: '',
					password: '',
					rol: 1,
					birth_date: '',
				}}
				onSubmit={handleSubmit}
				validationSchema={userSchema}
			>
				<Form className='ring-4 shadow-xl rounded-xl ring-gray-400 p-10'>
					<h1 className='text-center text-3xl font-semibold font-serif'>Registro de usuario</h1>
					<FormGroup className={styles.formGroup}>
						<label htmlFor='name'>Nombre: </label>
						<Field
							className={styles.field}
							name='name'
							placeholder='Escribe aquí tu nombre'
							type='text'
						/>
						<ErrorMessage name='name' component='div' className={styles.errorMessage} />
					</FormGroup>
					<FormGroup className={styles.formGroup}>
						<label htmlFor='last_name'>Apellidos: </label>
						<Field
							className={styles.field}
							name='last_name'
							placeholder='Escribe aquí tus apellidos'
							type='text'
						/>
						<ErrorMessage name='last_name' component='div' className={styles.errorMessage} />
					</FormGroup>
					<FormGroup className={styles.formGroup}>
						<label htmlFor='birth_date'>Fecha de Nacimiento: </label>
						<Field
							className={styles.field}
							name='birth_date'
							placeholder='Selecciona aquí tu fecha de nacimiento'
							type='date'
						/>
						<ErrorMessage name='birth_date' component='div' className={styles.errorMessage} />
					</FormGroup>
					<FormGroup className={styles.formGroup}>
						<label htmlFor='email'>Correo Electronico: </label>
						<Field
							className={styles.field}
							name='email'
							placeholder='Escribe aquí tu correo'
							type='email'
						/>
						<ErrorMessage name='email' component='div' className={styles.errorMessage} />
					</FormGroup>
					<FormGroup className={styles.formGroup}>
						<label htmlFor='password'>Contraseña: </label>
						<Field
							className={styles.field}
							name='password'
							placeholder='Escribe aquí tu contraseña'
							type='password'
						/>
						<ErrorMessage name='password' component='div' className={styles.errorMessage} />
					</FormGroup>
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
				</Form>
			</Formik>
			<div className='flex justify-between pt-3'>
				<Button style={{ color: '#6EB500' }} onClick={() => navigate(-1)}>
					Regresar
				</Button>
				<Button style={{ color: '#6EB500' }} onClick={() => navigate('/signin')}>
					Iniciar Sesión
				</Button>
			</div>
			<ErrorDialog close={closeErr} open={openDialogs.err} message={errorMessage} />
		</div>
	);
};

export default SignUpUser;
