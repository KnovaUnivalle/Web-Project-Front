import { object, string } from 'yup';

const signInSchema = object().shape({
	email: string()
		.required('Campo Requerido')
		.email('Correo Electronico Invalido')
		.max(50, 'Máximo 50 caracteres'),
	password: string()
		.required('Campo Requerido')
		.min(8, 'Contraseña muy corta')
		.matches(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
			'La contraseña debe contener una mayúscula, una minúscula y un número',
		),
});

export { signInSchema };
