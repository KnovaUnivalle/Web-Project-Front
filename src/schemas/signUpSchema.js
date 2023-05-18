import { date, number, object, string } from 'yup';

const userSchema = object().shape({
	email: string()
		.required('Campo Requerido')
		.email('Correo Electronico Invalido')
		.max(50, 'Máximo 50 caracteres'),
	name: string().required('Campo Requerido').max(50, 'Máximo 50 caracteres'),
	last_name: string().required('Campo Requerido').max(50, 'Máximo 50 caracteres'),
	password: string()
		.required('Campo Requerido')
		.min(8, 'Contraseña muy corta')
		.matches(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
			'La contraseña debe contener una mayúscula, una minúscula y un número',
		),
	birth_date: date()
		.required('Campo Requerido')
		.max(new Date(), 'Tu fecha de nacimiento no puede ser mayor a la fecha actual'),
	rol: number().required('Campo Requerido'),
});

export { userSchema };
