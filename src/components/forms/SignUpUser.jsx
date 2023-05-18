import { ErrorMessage, Field, Form, Formik } from 'formik';
import { userSchema } from '../../schemas/signUpSchema';
import { Button, FormGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const styles = {
	errorMessage: 'text-red-700 font-serif rounded-sm',
	formGroup: 'my-3 lg:my-1',
	field:
		'p-1 my-1 border rounded border-slate-300 shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:shadow-outline focus:outline-none',
};

const SignUpUser = () => {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col justify-center align-middle m-auto w-3/4 min-h-screen md:w-2/3 lg:w-2/5'>
			<Formik
				initialValues={{
					name: '',
					last_name: '',
					email: '',
					password: '',
					rol: 1,
					birth_date: '',
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
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
			<div className='flex justify-around pt-3'>
				<Button style={{ color: '#6EB500' }} onClick={() => navigate('/')}>
					Regresar
				</Button>
				<Button style={{ color: '#6EB500' }} onClick={() => navigate('/login')}>
					Iniciar Sesión
				</Button>
			</div>
		</div>
	);
};

export default SignUpUser;
