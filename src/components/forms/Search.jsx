import { Form, Formik } from 'formik';
import FormikInput from '../inputs/FormikInput';
import { Button } from '@mui/material';
import { searchSchema } from '../../schemas/searchSchema';

const defaultSubmit = (values) => console.log(values);

const Search = ({ funcSubmit = defaultSubmit }) => {
	return (
		<Formik initialValues={{ search: '' }} validationSchema={searchSchema} onSubmit={funcSubmit}>
			<Form className='flex justify-around'>
				<FormikInput
					name='search'
					type='text'
					label='Búsqueda...'
					placeholder='Búsqueda...'
					className='w-full'
				/>
				<div className='mt-auto pl-2'>
					<Button type='submit' variant='contained' disableElevation>
						Buscar
					</Button>
				</div>
			</Form>
		</Formik>
	);
};

export default Search;