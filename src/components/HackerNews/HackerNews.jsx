import { useState, useEffect } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import requestArticles from '../../reducers/hackerNewsReducer.js';
import { useSelector, useDispatch } from 'react-redux';

export default function HackerNews() {
  console.log(useSelector((state) => state));

  const articles = useSelector((state) => state.hackerNews.articles);
  const loading = useSelector((state) => state.hackerNews.loading);
  const dispatch = useDispatch();
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(requestArticles)
  }, [])

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);
  return (
    <div className="news-container">
      <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
