import {data} from '../data/data.js';
import Card from './Card.js';
import './Main.scss';

const Main = () => {

    return (
        <div className="card-container">
            {data.map((item, i) => <Card {...item} key={i}/>)}
        </div>
    );
}

export default Main;