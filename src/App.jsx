import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";
import ToDo from "./components/ToDo.jsx";

const App = () => {

    return (
        <div className='font-body'>
            <Analytics/>
            <SpeedInsights/>

            <div className='blur-circle'></div>
            <div className='blur-circle'></div>

            <ToDo/>

        </div>
    )
}
export default App
