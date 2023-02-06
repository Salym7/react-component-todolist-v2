import {Form, Button} from 'react-bootstrap';
import {useState} from "react";

const TodoForm = (props) => {
    const [title, setTitle] = useState('')
    const [task, setTask] = useState('')

    const onTitle = (e) => {
        setTitle(e.target.value)
    }
    const onTask = (e) => {
        setTask(e.target.value)
    }

    const onClearForm = () => {
        setTitle('');
        setTask('');
        return '';
    }

    const onCreatTask = () => {
        if (title && task) {
            props.creatTask(title, task);
            setTitle('');
            setTask('');
        }
        return '';
    }

    return (
        <>
            <Form.Group className="mb-3" controlId="Task title">
                <Form.Label>Task title</Form.Label>
                <Form.Control
                    onChange={onTitle}
                    value={title}
                    name='text'
                    type="text"
                    placeholder='Title'
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Task body">
                <Form.Label className='text-left'>Task body</Form.Label>
                <Form.Control
                    onChange={onTask}
                    value={task}
                    name='body'
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
                        onClick={props.onClearTaskList}>Удалить все</Button>{' '}
            </div>

        </>
    )
}

export default TodoForm;