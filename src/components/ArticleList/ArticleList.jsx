import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SingleArticle from '../SingleArticle';
import { loadArticles } from '../../store/articleReducer';


const ArticleList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Code to run **after** the component has rendered
    dispatch(loadArticles());
  }, [dispatch])
  // It should only run one time

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        <li>Gilligan&apos;s Island. Is it true?</li>
        <li>A Baseball Moment</li>
        <li>Poke Moment</li>
        <li>Cool Cats</li>
        <li>Why Am I At Home</li>
      </ol>
    </div>
  );
};

export default ArticleList;
