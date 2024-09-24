import { useState, useEffect } from 'react';

function TodoList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000')
            .then((resource) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, []);

    return (
        <div>
            {posts}
        </div>
    );
}