import { ErrorMessage, Field, Form, Formik } from 'formik';
import { signInSchema } from '../schemas/signInSchema';
import { Button, FormGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import API from '../utils/API';

const styles = {
	errorMessage: 'text-red-700 font-serif rounded-sm',
	formGroup: 'my-3 lg:my-1',
	field:
		'p-1 my-1 border rounded border-slate-300 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:shadow-outline focus:outline-none',
};

const SignIn = () => {
	const navigate = useNavigate();

	const handleSubmit = (values) => {
		API.post('login/', values)
			.then((response) => {
				if (response.status === 200) {
					navigate('/home');
				}
			})
			.catch((err) => {
				if (err.response.status === 401) {
					alert('Usuario no registrado');
				}
			});
	};

	return (
		<div className='flex flex-col justify-center align-middle m-auto w-3/4 min-h-screen md:w-2/3 lg:w-1/3'>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={handleSubmit}
				validationSchema={signInSchema}
			>
				<Form className='ring-4 shadow-xl rounded-xl ring-gray-400 p-10'>
					<h1 className='text-center text-3xl font-semibold font-serif'>Inicio de sesión</h1>
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
							Iniciar sesión
						</Button>
					</div>
				</Form>
			</Formik>
			<div className='flex justify-between pt-3'>
				<Button style={{ color: '#6EB500' }} onClick={() => navigate(-1)}>
					Regresar
				</Button>
				<Button style={{ color: '#6EB500' }} onClick={() => navigate('/signup')}>
					Registrarse
				</Button>
			</div>
		</div>
	);
};

export default SignIn;
