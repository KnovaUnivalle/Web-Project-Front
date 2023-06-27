import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useField } from 'formik';

const FormikSelect = ({ label, items, ...props }) => {
	const [field, meta, helpers] = useField(props);
	return (
		<FormControl variant='standard' fullWidth sx={{ mt: 1 }}>
			<InputLabel id='demo-simple-select-label'>{label}</InputLabel>
			<Select
				id={field.name}
				name={field.name}
				value={field.value}
				label={label}
				variant='standard'
				onChange={field.onChange}
				error={meta.touched && meta.error}
			>
				<MenuItem value={items.primary.value}>{items.primary.label}</MenuItem>
				<MenuItem value={items.secondary.value}>{items.secondary.label}</MenuItem>
			</Select>
		</FormControl>
	);
};

export default FormikSelect;
