let listStudent = [
    {
        id: 1,
        name: 'Ngoc Hung Bui',
        score: 10,
        age: 22,
    },
    {
        id: 2, 
        name: 'Ngoc Hung Bui 2',
        score: 20,
        age: 222,
    },
    {
        id: 3,
        name: 'Ngoc Hung Bui 3',
        score: 20,
        age: 2222,
    }
]

export default function Student(){
    return(
        <>
        {
        listStudent.map(e => (
            <p>ID: {e.id} - {e.name} - Score: {e.score} - Age: {e.age}
            </p>
        ))
        }
        </>
    )
}