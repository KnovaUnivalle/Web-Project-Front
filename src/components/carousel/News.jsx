import Carousel from 'react-material-ui-carousel';
import NewsCard from '../card/NewsCard';

const data = {
	title: 'title',
	content: 'content',
	date: '2032-32-32',
	image: 'https://avatars.githubusercontent.com/u/54079546?s=40&v=4',
};

const dataList = [data, data, data];

const News = ({ dataNews = dataList }) => {
	return (
		<article className='md:w-1/2'>
			<h1 className='text-center text-3xl font-semibold pb-3'>Noticias</h1>
			<Carousel navButtonsAlwaysVisible>
				{dataNews.map((dataNew, index) => (
					<div className='md:w-2/3 lg:1/2 mx-auto' key={`newCard${index}`}>
						<NewsCard dataNew={dataNew} />
					</div>
				))}
			</Carousel>
		</article>
	);
};

export default News;