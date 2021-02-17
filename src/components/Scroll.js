import react from 'react';


const Scroll = (props) => {
    return (
        <div style={{overflowY : 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
        ); // because it has children inside
}

export default Scroll;