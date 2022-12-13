import classes from "../style/Todo.scss";

export const Todo = () => {
    const deleteHandler = () => {
        window.confirm('정말 삭제 하겠습니까?');
    }
    const updateHandler = () => {
        
    }
    return <>
        <ul>
            <li>Todo item <button onClick={updateHandler}>수정</button><button onClick={deleteHandler}>삭제</button></li>
        </ul>
    </>
}