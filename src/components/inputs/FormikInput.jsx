import { useField } from 'formik';
import style from './styles/formikInput.module.css';

const FormikInput = ({ label, ...props }) => {
	const [field, meta, helpers] = useField(props);
	return (
		<div className={style.form__group}>
			<input {...field} {...props} className={style.form__field} />
			<label className={style.form__label}>{label}</label>
			{meta.touched && meta.error ? <div className={style.form__error}>{meta.error}</div> : null}
		</div>
	);
};

export default FormikInput;
