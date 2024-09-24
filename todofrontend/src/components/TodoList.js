import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function TodoList() {
    const [list, setList] = useState([]);

    function getList() {
        fetch('/todo')
        .then((resource) => resource.json())
        .then((data) => {
            setList(data);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    useEffect(() => {
        getList();
    }, []);

    function addItem() {
        const fetchOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/todo', fetchOptions)
        .then((resource) => resource.json())
        .then((data) => {
            getList();
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    function updateItem(index, text) {
        const fetchOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index: index, text: text })
        };
        fetch('/todo', fetchOptions)
        .then((resource) => resource.json())
        .then((data) => {
            getList();
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    function onKeyPressed(event, index) {
        if (event.key === 'Enter') {
            console.log('enter pressed!');
            updateItem(index, event.target.value);
        }
    }

    return (
        <div>
            <Button size="small" onClick={addItem}>Press Me</Button>
            {list.list?.map((item, index) => (
                <Card key={index} sx={{ minWidth: 275 }}>
                    <CardContent>
                        <TextField id="standard-basic" label="Standard" variant="standard" defaultValue={item} onKeyDown={(event) => {onKeyPressed(event, index)}} />
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
export default TodoList;