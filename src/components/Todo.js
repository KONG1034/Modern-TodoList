import classes from "../style/Todo.scss";

export const Todo = () => {
    const deleteHandler = () => {
        window.confirm('정말 삭제 하겠습니까?');
    }
    const updateHandler = () => {

    }
    const createHandler = () => {
        
    }
    return <>
        <div className="todo-div">
            <div className="todo-input-div"><input type="text" id="todo" name="todo" placeholder="해야할 일을 추가해주세요."/></div>
            <button onClick={createHandler}>추가</button>
        </div>
        <ul>
            <li>Todo item <button onClick={updateHandler}>수정</button><button onClick={deleteHandler}>삭제</button></li>
        </ul>
    </>
}