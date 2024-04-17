import {useState} from "react";

const App = () => {

    const [getX, setX] = useState(0);

    const btnClick = () => {
        setX(getX + 1);
    }

    return (
        <div>

            {getX}

            <button onClick={() => {
                btnClick()
            }}>Click Me!
            </button>

        </div>
    )
}
export default App
