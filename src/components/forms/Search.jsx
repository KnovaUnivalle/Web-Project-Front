import { Form, Formik } from 'formik';
import FormikInput from '../inputs/FormikInput';
import { Button } from '@mui/material';

const Search = () => {
	return (
		<Formik initialValues={{ search: '' }}>
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