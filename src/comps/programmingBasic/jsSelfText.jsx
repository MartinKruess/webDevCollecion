export const SelfTest = () => {
    const questionIndex = []
    for (let i = 0; i < 10; i++) {
        questionIndex.push(Math.floor(Math.random() * 30))
    }
    console.log(questionIndex)

    return (
        <article>
            <div className="questionContainer">
                <h2>ABC</h2>
            </div>
        </article>
    )
}