import react from 'react';
import Card from './Card';

const CardList = ({ robots }) => { // destructuring of the properties
    const CardComponent = robots.map( (user,i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })

    //if(true) throw new Error;
    return (
        <div>
          {CardComponent}
        </div>
    );
}

export default CardList;