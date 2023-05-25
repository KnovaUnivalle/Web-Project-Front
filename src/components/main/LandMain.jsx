import Service from '../sections/Service';
import Statement from '../sections/Statement';
import Team from '../sections/Team';
import Welcome from '../sections/Welcome';

const LandMain = () => {
	return (
		<main>
			<Welcome />
			<Service />
			<Statement />
			<Team />
		</main>
	);
};

export default LandMain;
