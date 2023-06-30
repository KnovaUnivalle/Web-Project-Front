import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LANDING_PAGE_PATH, SIGN_IN_PATH } from '../../utils/PATH';
import { useAuth } from '../../hooks/useAuth';

const pageSign = { title: 'Iniciar Sesión', id: SIGN_IN_PATH };
const pageLogOut = { title: 'Cerrar Sesión', id: LANDING_PAGE_PATH };

const Movil = () => {
	const navigate = useNavigate();
	const { token, logout } = useAuth();

	const [menu, setMenu] = useState(null);

	const handleOpenMenu = (event) => {
		setMenu(event.currentTarget);
	};

	const goPage = (url) => {
		setMenu(null);
		navigate(url);
	};

	const handleCloseMenu = () => {
		setMenu(null);
	};

	const handleLogOut = (url) => {
		logout(() => navigate(url));
	};

	return (
		<div>
			<IconButton size='large' aria-controls='menu' aria-haspopup='true' onClick={handleOpenMenu}>
				<Avatar fontSize='large' />
			</IconButton>
			<Menu
				id='menu'
				anchorEl={menu}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(menu)}
				onClose={handleCloseMenu}
			>
				{token ? (
					<MenuItem onClick={() => handleLogOut(LANDING_PAGE_PATH)}>{pageLogOut.title}</MenuItem>
				) : (
					<MenuItem onClick={() => goPage(pageSign.id)}>{pageSign.title}</MenuItem>
				)}
			</Menu>
		</div>
	);
};

export default Movil;
