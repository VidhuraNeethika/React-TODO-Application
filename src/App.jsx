import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";
import ToDo from "./components/ToDo.jsx";

const App = () => {

    return (
        <div className='font-body'>
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
