import Score from "./Score";

export default function Learners(props) {
//export default function Learners({learners}) {
    const {learners} = props

    return (
      <>
        <h1>Learners Component</h1>
        {learners.map((learner, index) => (
                <div key={index}>
                    <h2>{learner.name}</h2>
                    <p>{learner.bio}</p>
                    <Score scoreData={learner.scores}/>
                </div>    
        ))}        
      </>
    );
  }