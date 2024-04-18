import './css/ToDo.css';
import {useEffect, useRef, useState} from "react";
import ToDoItems from "./ToDoItems.jsx";

let count = 0;

const ToDo = () => {

    const [getToDoList, setToDoList] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        if (inputRef.current.value === "") {
            alert("Please enter a task");
        } else {
            setToDoList([...getToDoList, {no: count++, text: inputRef.current.value, display: ""}]);
            inputRef.current.value = "";
            localStorage.setItem("toDo_count", count);
        }
    }

    useEffect(() => {
        setToDoList(JSON.parse(localStorage.getItem("toDoList")));
        count = localStorage.getItem("toDo_count");
    }, []);

    useEffect(() => {
        setTimeout(() => {
            console.log(getToDoList);
            localStorage.setItem('toDoList', JSON.stringify(getToDoList));
        }, 100);
    }, [getToDoList]);

    return (
        <div className='grid grid-cols-12'>

            <div
                className='col-span-10 col-start-2 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5 bg-white p-3 rounded-lg mt-10'>

                <div className="text-center mb-5">
                    <h1 className="text-2xl font-bold text-indigo-950">To Do List</h1>
                </div>

                <div className='mb-5'>
                    <input type="text" placeholder="Enter new task"
                           className='todo-input' ref={inputRef}/>
                    <button className='todo-btn' onClick={() => {
                        add()
                    }}>Add
                    </button>
                </div>

                <div className='todo-list bgte'>
                    {getToDoList.map((item, index) => {
                        return <ToDoItems key={index} setToDoList={setToDoList} no={item.no} display={item.display}
                                          text={item.text}/>
                    })}
                </div>

            </div>

        </div>
    )

}

export default ToDo;