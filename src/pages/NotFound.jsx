import { Link } from 'react-router-dom';

const basicRoutes = [{ link: '/', name: 'INICIO' }];

const NotFound = ({ title = 'Página no encontrada', routes = basicRoutes }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Error 404</h1>
			<h2>{title}</h2>
			<section>
				<p>Enlaces que pueden ayudar:</p>
				{routes.map((route) => (
					<Link key={route.name} to={route.link}>
						<p>{route.name}</p>
					</Link>
				))}
			</section>
		</div>
	);
};

export default NotFound;
