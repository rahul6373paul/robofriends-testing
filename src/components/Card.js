import React from 'react';


const Card = ({ name, email, id }) => {
    return(
        <div id={id} className="bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-3 black">
            <img src={ `https://robohash.org/${id}?size=200x200` } alt="holA" />
            <div>
                <h2>{ name }</h2> 
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;