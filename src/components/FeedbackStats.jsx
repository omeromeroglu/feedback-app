import React from 'react';

function FeedbackStats({ feedback }) {
    //Calculate the average rating
    let total = feedback.reduce((total, item) => total + item.rating, 0);
    let average = total / feedback.length;
    average = average.toFixed(1).replace(/\.0$/, '');


  return <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Avarage Rating : {isNaN(average) ? 0 : average }</h4>
      </div>;
}

export default FeedbackStats;
