import {
	Box,
	Toolbar,
	Typography,
	List,
	ListItemText,
	ListItemIcon,
	ListItemButton,
	ListItem,
	IconButton,
	Divider,
	CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';
import { AppBar, Drawer, DrawerHeader } from './UtilsOperations';

const NavBarOperations = ({ title = 'Drawer', body, menus, ...props }) => {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position='fixed' open={open}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{
							marginRight: 2,
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						{title}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{menus.map((menu) => (
						<ListItem key={`navOperations${menu.title}`} disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 2 : 'auto',
										justifyContent: 'center',
									}}
								>
									{menu.icon}
								</ListItemIcon>
								<ListItemText primary={menu.title} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
							{menu.divider ? <Divider /> : null}
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{body}
			</Box>
		</Box>
	);
};

export default NavBarOperations;
