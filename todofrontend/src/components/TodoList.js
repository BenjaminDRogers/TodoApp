import { useState, useEffect } from 'react';

function TodoList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('/todo')
            .then((resource) => resource.json())
            .then((data) => {
                console.log(data);
                setList(data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, []);

    return (
        <div>
            {list.list}
        </div>
    );
}
export default TodoList;