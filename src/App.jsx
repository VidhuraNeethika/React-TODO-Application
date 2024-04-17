import {useState} from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {

    const [getX, setX] = useState(0);

    const btnClick = () => {
        setX(getX + 1);
    }

    return (
        <div>

            <Analytics/>
            <SpeedInsights/>

            {getX}

            <button onClick={() => {
                btnClick()
            }}>Click Me!
            </button>

        </div>
    )
}
export default App
