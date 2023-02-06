// import {useEffect, useState} from "react";
// import Task from '../components/Task';
import Col from "react-bootstrap/Col";
import {Button, Form} from "react-bootstrap";

const Tasks = (props) => {

    const onDelete = (id) => () => {
        props.deleteList(id);
    }

    return (
        <>
            {props.data.map(item => (
                <Col sm={4} key={item.id}>
                    <div className="taskWrapper">
                        <div className='taskHeading'>{item.title}</div>
                        <div className='taskDescription'>{item.task}</div>
                        <hr/>
                        <Form.Check
                            type="checkbox"
                            id="checkbox"
                            label="Завершено ?"
                        />
                        <hr/>
                        <Button variant="danger" onClick={onDelete(item.id)}>Удалить</Button>
                    </div>
                </Col>
            ))}
        </>
    )

}

export default Tasks;