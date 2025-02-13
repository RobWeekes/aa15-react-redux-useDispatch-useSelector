import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SingleArticle from '../SingleArticle';
import { loadArticles } from '../../store/articleReducer';

const ArticleList = () => {
  const dispatch = useDispatch();
  // Use the useSelector hook to subscribe to the store and listen for changes in state.
  const articles = useSelector(state => {
    // console.log('article state entries:', state.articleState.entries);
    return state.articleState.entries;
  });
  console.log('articles:', articles);

  useEffect(() => {
    // Code to run **after** the component has rendered
    dispatch(loadArticles());
  }, [dispatch]);
  // It should only run one time

  return (
    <div>
      <h1>Article List</h1>
      <ol>  {/* you can pass in 'article,' or destructure id/title out in arg */}
        {articles.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`${id}`}>
              {title}
            </NavLink>
          </li>
        ))}
      </ol>
    </div>

// // delete the placeholder li elements:
//     <div>
//       <h1>Article List</h1>
//       <ol>
//         <li>Gilligan&apos;s Island. Is it true?</li>
//         <li>A Baseball Moment</li>
//         <li>Poke Moment</li>
//         <li>Cool Cats</li>
//         <li>Why Am I At Home</li>
//       </ol>
//     </div>
  );
};

export default ArticleList;
