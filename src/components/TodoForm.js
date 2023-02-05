import {Form, Button} from 'react-bootstrap';
import {useState} from "react";
import {nanoid} from "nanoid";

const TodoForm = () => {
    const selector = 'todoForm'
    const [title, setTitle] = useState('')
    const [task, setTask] = useState('')

    const onTitle = (e) => {
        setTitle(e.target.value.trim())

    }
    const onTask = (e) => {
        setTask(e.target.value.trim())
    }
    const onCreatTask = () => {
        const data = {
            title,
            task,
            id: nanoid()
        }
        let dataFromStore = localStorage.getItem(selector);
        if (!dataFromStore) {
            const array = [];
            array.push(data);
            localStorage.setItem(selector, JSON.stringify(array));
        }
        if (dataFromStore) {
            dataFromStore = JSON.parse(dataFromStore);
            dataFromStore.push(data);
            localStorage.setItem(selector, JSON.stringify(dataFromStore));
        }
        setTitle('');
        setTask('');
        return '';
    }

    const onClearForm = () => {
        setTitle('');
        setTask('');
        return '';
    }

    const onClearTasks = () => {
        localStorage.clear();
        return '';
    }

    return (
        <>
            <Form.Group className="mb-3" controlId="Task title">
                <Form.Label htmlFor='title'>Task title</Form.Label>
                <Form.Control
                    onChange={onTitle}
                    value={title}
                    name='text'
                    type="text"
                    id="title"
                    placeholder='Title'
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Task body">
                <Form.Label className='text-left' htmlFor='body'>Task body</Form.Label>
                <Form.Control
                    onChange={onTask}
                    value={task}
                    name='body'
                    htmlFor='body'
                    as="textarea"
                    placeholder="Task body"
                    style={{height: '250px'}}
                />
            </Form.Group>
            <div className='d-flex justify-content-between'>
                <div>
                    <Button variant="primary"
                            onClick={onCreatTask}
                    >Creat Task!</Button>{' '}
                    <Button variant="warning"
                            onClick={onClearForm}>Очистить</Button>{' '}
                </div>
                <Button variant="danger"
                        onClick={onClearTasks}>Удалить все</Button>{' '}
            </div>

        </>
    )
}

export default TodoForm;