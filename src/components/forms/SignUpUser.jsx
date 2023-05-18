import { ErrorMessage, Field, Form, Formik } from 'formik';
import { userSchema } from '../../schemas/signUpSchema';
import { FormGroup } from '@mui/material';

const SignUpUser = () => {
	return (
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
			<Form>
				<FormGroup>
					<label htmlFor='name'>Nombre: </label>
					<Field
						className='form-control'
						name='name'
						placeholder='Escribe aquí tu nombre'
						type='text'
					/>
					<ErrorMessage name='name' component='div' className='field-error text-danger' />
				</FormGroup>
				<FormGroup>
					<label htmlFor='last_name'>Apellidos: </label>
					<Field
						className='form-control'
						name='last_name'
						placeholder='Escribe aquí tus apellidos'
						type='text'
					/>
					<ErrorMessage name='last_name' component='div' className='field-error text-danger' />
				</FormGroup>
				<FormGroup>
					<label htmlFor='birth_date'>Fecha de Nacimiento: </label>
					<Field
						className='form-control'
						name='birth_date'
						placeholder='Selecciona aquí tu fecha de nacimiento'
						type='date'
					/>
					<ErrorMessage name='birth_date' component='div' className='field-error text-danger' />
				</FormGroup>
				<FormGroup>
					<label htmlFor='email'>Correo Electronico: </label>
					<Field
						className='form-control'
						name='email'
						placeholder='Escribe aquí tu correo'
						type='email'
					/>
					<ErrorMessage name='email' component='div' className='field-error text-danger' />
				</FormGroup>
				<FormGroup>
					<label htmlFor='password'>Contraseña: </label>
					<Field
						className='form-control'
						name='password'
						placeholder='Escribe aquí tu contraseña'
						type='password'
					/>
					<ErrorMessage name='password' component='div' className='field-error text-danger' />
				</FormGroup>
				<button type='submit'>Submit</button>
			</Form>
		</Formik>
	);
};

export default SignUpUser;
