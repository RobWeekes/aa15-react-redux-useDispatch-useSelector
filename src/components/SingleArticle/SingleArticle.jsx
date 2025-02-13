import './SingleArticle.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadArticles } from '../../store/articleReducer';

const SingleArticle = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Code to run **after** the component has rendered
    dispatch(loadArticles);
  }, [])
  // It should only run one time

  return (
    <div className='singleArticle'>
      <h1>Why Am I At Home</h1>
      <img
        src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F10%2FKevin-Home-Alone.jpg'
        alt='home'
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse
        laboriosam officia accusantium veritatis fugiat exercitationem vero
        autem nihil aliquid ullam recusandae, quis odit odio voluptates
        explicabo nobis! Consequuntur, aliquam?
      </p>
    </div>
  );
};

export default SingleArticle;
