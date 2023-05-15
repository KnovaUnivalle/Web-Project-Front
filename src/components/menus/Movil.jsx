import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Movil = ({ pages }) => {
	const [menu, setMenu] = useState(null);

	const handleOpenMenu = (event) => {
		setMenu(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setMenu(null);
	};

	return (
		<>
			<div className='md:hidden'>
				<IconButton size='large' aria-controls='menu' aria-haspopup='true' onClick={handleOpenMenu}>
					<MenuIcon fontSize='large' style={{ color: 'black' }} />
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
					sx={{
						display: { xs: 'block', md: 'none' },
					}}
				>
					{pages.map((page) => (
						<MenuItem key={`menuitem${page.id}`} onClick={handleCloseMenu}>
							<a href={`#${page.id}`}>
								<Typography textAlign='center'>{page.title}</Typography>
							</a>
						</MenuItem>
					))}
				</Menu>
			</div>
		</>
	);
};

export default Movil;
