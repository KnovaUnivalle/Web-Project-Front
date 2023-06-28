import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';

const InfoDialog = ({
	message = { title: 'error', body: 'error' },
	open = false,
	close = () => {
		console.log('close');
	},
}) => {
	return (
		<Dialog onClose={close} open={open}>
			<DialogTitle>{message.title}</DialogTitle>
			<DialogContent>
				<DialogContentText sx={{ width: '16rem' }}>{message.body}</DialogContentText>
				<DialogActions>
					<Button color='info' variant='contained' onClick={close}>
						OK
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
};

export default InfoDialog;
