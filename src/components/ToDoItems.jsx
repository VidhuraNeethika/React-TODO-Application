const ToDoItems = ({no, display, text, setToDoList}) => {

    const deleteItem = (no) => {
        let data = JSON.parse(localStorage.getItem('toDoList'));
        data = data.filter((todo) => todo.no !== no);
        setToDoList(data);
    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem('toDoList'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                if (data[i].display === "") {
                    data[i].display = "line-through";
                } else {
                    data[i].display = "";
                }
                break;
            }
        }
        setToDoList(data);
    }

    return (
        <div className='todo-items'>

            <div className='grid grid-cols-12 bg-gray-100 mt-2 p-5 rounded-lg'>

                <div className='col-span-11' onClick={() => {
                    toggle(no)
                }}>
                    {display === "" ? <span><i className="bi bi-circle"></i></span> :
                        <span><i className="bi bi-check-circle-fill"></i></span>}
                    <div className={`todo-item-text px-3 inline-block ${display}`}>{text}</div>
                </div>

                <div className='col-span-1 text-right'>
                    <span onClick={() => {
                        deleteItem(no)
                    }}><i className="bi bi-x-circle-fill"></i></span>
                </div>

            </div>

        </div>
    )

}

export default ToDoItems;