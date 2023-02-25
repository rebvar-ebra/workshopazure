import React from 'react'

function Eventdetail(props) {
  const {event}=props;
  console.log(props)
  return (
    <div>
      <h1>Event reviews</h1>
      {event.name}  
      {event.description} 

    <table>
  <thead>
    <tr>
      <th>Author</th>
      <th>Points</th>
      <th>Comment</th>
    </tr>
  </thead>
  <tbody>
    {event.reviews.map(item => {
      return (
        <tr key={item.id}>
          <td>{ item.authorName }</td>
          <td>{ item.reviewPointsFrom0to10 }</td>
          <td>{ item.comment }</td>
        </tr>
      );
    })}
  </tbody>
</table>
</div>

  )
}


export default Eventdetail