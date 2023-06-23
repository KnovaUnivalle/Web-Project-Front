import { boolean, date, object, string } from 'yup';

export const newSchema = object().shape({
	title: string().required('Campo Requerido').max(200, 'Máximo 200 caracteres'),
	content: string().required('Campo Requerido'),
	is_active: boolean().required('Campo Requerido'),
	date: date().required(),
	image: string().required('Campo Requerido').max(10, 'Máximo 200 caracteres'),
});
