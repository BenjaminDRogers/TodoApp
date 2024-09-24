import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './TodoList.css';

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
        .then(() => {
            getList();
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    function updateItem(index, text) {
        console.log('update: ', index);
        const fetchOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index: index, text: text })
        };
        fetch('/todo', fetchOptions)
        .then((resource) => resource.json())
        .then(() => {
            getList();
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    function onKeyPressed(event, index) {
        console.log('onkeypressed!');
        if (event.key === 'Enter') {
            console.log('onkeypressed: enter!');
            updateItem(index, event.target.value);
        }
    }

    function removeItem(index) {
        console.log('remove: ', index);
        const fetchOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index: index, text: '' })
        };
        fetch('/todo', fetchOptions)
        .then((resource) => resource.json())
        .then(() => {
            getList();
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    const generateKey = (prefix) => {
        return `${prefix}_${new Date().getTime()}`;
    }

    return (
        <div>
            {list.list?.map((item, index) => (
                <Card key={generateKey(index)} sx={{ minWidth: 275 }} className="Card">
                    <CardContent>
                        <TextField id="standard-basic" variant="standard" defaultValue={item} onKeyPress={(event) => {onKeyPressed(event, index)}} />
                    </CardContent>
                    <CardActions className="Card-actions">
                        <Button size="small" onClick={() => {removeItem(index)}}>Remove</Button>
                    </CardActions>
                </Card>
            ))}
            <Button size="small" variant="contained" onClick={addItem} className="Add-button">Add New Item</Button>
        </div>
    );
}
export default TodoList;