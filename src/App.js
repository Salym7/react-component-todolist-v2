import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoForm from './components/TodoForm'
import Tasks from './components/Tasks'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from "react";
import {nanoid} from "nanoid";

function App() {

    const [taskList, setTaskList] = useState([])

    const onClearTaskList = () => {
        setTaskList([])
        return '';
    }

    const creatTask = (title, task) => {
        const obj = {
            title,
            task,
            id: nanoid()
        }
        const newTask = [...taskList, obj];
        setTaskList(newTask)
        return '';
    }

    const onDeleteTask = (id) => {
        setTaskList(taskList.filter(item => item.id !== id))
    }

    return (
        <div className="App">
            <Container>
                <h1 className='text-center mt-5 mb-5'>{'TODO LIST'}</h1>
                <Row>
                    <Col sm={4}>{<TodoForm taskList={taskList}
                                           creatTask={creatTask}
                                           onClearTaskList={onClearTaskList}/>}</Col>
                    <Col sm={8}>
                        <Row>
                            {<Tasks data={taskList} deleteList={onDeleteTask}/>}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
