import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { useState } from 'react';

const ErrorDialog = ({
	title = 'error',
	body = 'error',
	open = false,
	close = () => {
		console.log('close');
	},
}) => {
	const [openDialog, setOpenDialog] = useState(open);
	const handleClose = () => {
		close();
		setOpenDialog(false);
	};
	return (
		<Dialog onClose={handleClose} open={openDialog}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText sx={{ width: '20rem' }}>{body}</DialogContentText>
				<DialogActions>
					<Button color='info' variant='contained' onClick={handleClose}>
						OK
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
};

export default ErrorDialog;
