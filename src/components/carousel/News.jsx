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
	setTimeout(() => {}, 500);
	return (
		<article className='md:w-1/2'>
			<h1 className='text-center text-3xl font-semibold pb-3 w-full'>Noticias</h1>
			<Carousel>
				{dataNews.map((dataNew, index) => (
					<div className='flex justify-center m-auto h-116' key={`newCard${index}`}>
						<NewsCard dataNew={dataNew} />
					</div>
				))}
			</Carousel>
		</article>
	);
};

export default News;
