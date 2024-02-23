async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    return res.json()
}

const LearnDataFetching = async() => {
    const data = await getData()
    console.log("Data" , data);
  return (
    <>
    {
        data.map((post , id) => (
            <div key={id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))
    }
    </>
  )
}

export default LearnDataFetching