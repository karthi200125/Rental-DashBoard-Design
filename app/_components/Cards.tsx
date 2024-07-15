import { Houses } from '../data';
import Card from './Card';

const Cards = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {Houses?.map((c) => (
                <Card key={c?.id} card={c} />
            ))}
        </div>
    );
};

export default Cards;
