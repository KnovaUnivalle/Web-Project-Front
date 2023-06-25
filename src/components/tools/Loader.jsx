import styles from './styles/loader.module.css';

const Loader = ({ color = '#6EB500', size = '4rem' }) => {
	return (
		<div className={styles.loader} style={{ borderRightColor: color, width: size, height: size }} />
	);
};

export default Loader;