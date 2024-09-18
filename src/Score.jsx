export default function Score(props){
//export default function Score({scoreData}){
    const {scoreData} = props
    return(
        <>
            <p><strong>Score</strong></p>
            {scoreData.map((score, index) => (
                <div key={index}>
                    <p><b>{score.score}</b>  : {score.date}</p>
                </div>
            ))}

        </>
    )
}