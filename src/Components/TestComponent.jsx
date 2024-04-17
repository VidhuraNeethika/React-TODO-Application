const TestComponent = ({data,fn})=>{
    return(
        <div>
            <p>From Test Component</p>
            <button onClick={()=>{fn(10)}}>Set 10</button>
            {data}
        </div>
    )
}

export default TestComponent