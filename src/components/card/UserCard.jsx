import { defineRol } from '../../utils/AUX';

const UserCard = ({ dataUser }) => {
	return (
		<div className='border-x border-t shadow-md p-2 my-auto'>
			<h2 className='text-xl p-3 font-bold font-serif lg:text-2xl text-center'>
				Datos usuario ID: {dataUser.id}
			</h2>
			<table className='table-auto w-full'>
				<tbody>
					<tr className='border-b hover:bg-gray-50'>
						<td className='p-3'>Nombre: </td>
						<td className='p-3'>{dataUser.name}</td>
					</tr>
					<tr className='border-b hover:bg-gray-50'>
						<td className='p-3'>Apellidos: </td>
						<td className='p-3'>{dataUser.last_name}</td>
					</tr>
					<tr className='border-b hover:bg-gray-50'>
						<td className='p-3'>Correo: </td>
						<td className='p-3'>{dataUser.email}</td>
					</tr>
					<tr className='border-b hover:bg-gray-50'>
						<td className='p-3'>Estado: </td>
						<td className='p-3'>{dataUser.is_active ? 'Activo' : 'No Activo'}</td>
					</tr>
					<tr className='border-b hover:bg-gray-50'>
						<td className='p-3'>Rol: </td>
						<td className='p-3'>{defineRol(dataUser.rol)}</td>
					</tr>
					<tr className='border-b hover:bg-gray-50'>
						<td className='p-3'>Fecha de nacimiento: </td>
						<td className='p-3'>{dataUser.birth_date}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default UserCard;