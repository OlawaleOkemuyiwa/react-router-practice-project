import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = props => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={props.id} className='btn'>View Fullscreen</Link> {/*Link is in a component loaded by Route so its to prop is made relative to its parent component i.e to="quotes/'props.id' */}
    </li>
  );
};

export default QuoteItem;
