export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.tyicode.com/todos')
    const data = await res.json()

    return {
        props: { response: data }
    }
}

const Static = ({response}) => {
    return (
        <div>
            <h1>Todos</h1>
            {response.map(res => (
                <p key={res.id}>{res.title} - {res.completed}</p>
            ))}
        </div>
    )
}

export default Static;