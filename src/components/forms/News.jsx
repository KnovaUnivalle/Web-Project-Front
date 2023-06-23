import { useFormik } from 'formik';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { newSchema } from '../../schemas/newSchema';

const today = new Date(Date.now());
const defaultSubmitFunc = (values) => console.log(values);
const defaultDataNew = {
	title: '',
	content: '',
	date: today.toISOString(),
	image: '',
	is_active: true,
};

const News = ({
	dataNew = defaultDataNew,
	submitFunc = defaultSubmitFunc,
	title = 'Formulario Noticias',
}) => {
	const formik = useFormik({
		initialValues: defaultDataNew,
		validationSchema: newSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className='ring-4 shadow-xl rounded-xl ring-gray-400 p-8 mb-20 flex gap-1 flex-col'
		>
			<h1 className='text-center text-3xl font-semibold font-serif text-gray-500'>{title}</h1>
			<TextField
				id='title'
				variant='standard'
				name='title'
				label='Título'
				value={formik.values.title}
				onChange={formik.handleChange}
				error={formik.touched.title && Boolean(formik.errors.title)}
				helperText={formik.touched.title && formik.errors.title}
			/>
			<TextField
				id='content'
				variant='standard'
				name='content'
				label='Título'
				multiline
				minRows={3}
				value={formik.values.content}
				onChange={formik.handleChange}
				error={formik.touched.content && Boolean(formik.errors.content)}
				helperText={formik.touched.content && formik.errors.content}
			/>
			<TextField
				id='image'
				variant='standard'
				name='image'
				label='Dirección Imagen'
				value={formik.values.image}
				onChange={formik.handleChange}
				error={formik.touched.image && Boolean(formik.errors.image)}
				helperText={formik.touched.image && formik.errors.image}
			/>
			<FormControl variant='standard' fullWidth sx={{ mt: 1 }}>
				<InputLabel id='demo-simple-select-label'>Estado</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='is_active'
					name='is_active'
					value={formik.values.is_active}
					label='Estado'
					variant='standard'
					onChange={formik.handleChange}
					error={formik.touched.is_active && Boolean(formik.errors.is_active)}
				>
					<MenuItem value={true}>Publicado</MenuItem>
					<MenuItem value={false}>No Publicado</MenuItem>
				</Select>
			</FormControl>
			<div className='flex justify-center pt-4'>
				<Button type='submit' variant='contained' disableElevation>
					Crear Usuario
				</Button>
			</div>
		</form>
	);
};

export default News;