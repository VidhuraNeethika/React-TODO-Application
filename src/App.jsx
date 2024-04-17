import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {useRef, useState} from "react";

const App = () => {

    const [getData, setData] = useState([]);
    const inputRef = useRef(null);

    return (
        <div>
            <Analytics/>
            <SpeedInsights/>

            <input ref={inputRef} type="text"/>

            <button onClick={() => {
                setData([...getData, inputRef.current.value])
            }}>Submit
            </button>

            {getData.map((item, index) => {
                return <p key={index}>{item}</p>
            })}

        </div>
    )
}
export default App
