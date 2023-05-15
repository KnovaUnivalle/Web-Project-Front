const members = [
	{
		name: 'Sara Erazo',
		role: 'Productor Manager',
		female: true,
		profile: 'https://github.com/sara505',
	},
	{
		name: 'Sebastián Estupiñan',
		role: 'Developer',
		female: false,
		profile: 'https://github.com/sebastian6551',
	},
	{
		name: 'Franklyn Narvaez',
		role: 'Developer',
		female: false,
		profile: 'https://github.com/Franklynnarvaez',
	},
	{
		name: 'Víctor Sapuyes',
		role: 'Developer',
		female: false,
		profile: 'https://github.com/andresNeveu',
	},
	{
		name: 'Christian Valenzuela',
		role: 'Líder de equipo',
		female: false,
		profile: 'https://github.com/chris-Sanchez098',
	},
];

const Team = () => {
	return (
		<>
			<section id='team' className='text-center pt-8'>
				<h2 className='text-3xl font-bold font-serif'>Conoce nuestro equipo</h2>
				<div className='flex flex-wrap flex-row md:flex-row justify-center'>
					{members.map((member) => {
						if (member.female) {
							return (
								<article key={member.name} className='px-2'>
									<a href={member.profile} target='_blanck'>
										<img
											src='./src/assets/female_avatar.svg'
											alt='Female Avatar'
											className='w-20 m-auto pt-5 pb-1'
										/>
										<p className='font-semibold'>{member.name}</p>
										<p>{member.role}</p>
									</a>
								</article>
							);
						}
						return (
							<article key={member.name} className='px-2 pt-1'>
								<a href={member.profile} target='_blanck'>
									<img
										src='./src/assets/male_avatar.svg'
										alt='Female Avatar'
										className='w-20 m-auto pt-5'
									/>
									<p className='font-semibold'>{member.name}</p>
									<p>{member.role}</p>
								</a>
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Team;
