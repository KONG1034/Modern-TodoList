import { useEffect, useRef, useState } from "react";
import {} from "../style/Todo.scss";
import axios from 'axios';

export const Todo = () => {
    //변수 정의
    const [mode, setMode] = useState(false);
    const [todos, setTodos] = useState([]);
    const [todoOne, setTodoOne] = useState(null);
    const todoRef = useRef(null);
    const updateRef = useRef(null);
    const token = localStorage.getItem('token');
    const headers = {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`
    }
    const url = "https://pre-onboarding-selection-task.shop/todos";

    //함수 정의
    useEffect(() => {
        let getToken = localStorage.getItem('token');
        let getHeaders = {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${getToken}`
        }
        axios.get(url,
        {headers : getHeaders})
        .then(res => {
            setTodos(res.data);
            todoRef.current.value = "";
        })
        .catch(err => {
            console.log(err);
            alert('정보를 불러오지 못했습니다.');
            todoRef.current.value = "";
        })
    }, [])
    //삭제 기능
    const deleteHandler = (params) => {
        let deleteHeaders = {
            "Authorization" : `Bearer ${token}`
        }
        if(window.confirm('정말 삭제 하겠습니까?')) {
            axios.delete(url+`/${params}`,
                {headers : deleteHeaders})
                .then(res => {
                    if(res.status === 204) {
                        alert('해당 할일이 삭제 되었습니다.');
                        setTodos(todos.filter((item) => item.id !== params));
                        todoRef.current.value = "";
                    }
                })
                .catch(err => {
                    console.log(err);
                    alert('입력한 내용을 다시 확인해주세요.');
                });
        }
        todoRef.current.value = "";
    }
    //수정 버튼 클릭시 조건부 렌더링 및 해당 id값 state값으로 변환
    const updateHandler = (params) => {
        setMode(!mode);
        setTodoOne(params);
        todoRef.current.value = "";
    }
    //수정 기능
    const updateConfirmHandler = (params) => {
        const updateData = {
            todo: updateRef.current.value,
            isCompleted: params.isCompleted
        }
        setMode(!mode);
        axios.put(url+`/${params.id}`,
            updateData,
            {headers})
            .then(res => {
                setTodos(todos.map(item => 
                    item.id === params.id ? item = res.data : item
                ))
            })
            .catch(err => {
                console.log(err);
                alert('수정이 실패하였습니다.');
                todoRef.current.value = "";
            })
    }
    //추가 기능
    const createHandler = () => {
        const userData = {
            "todo": todoRef.current.value
        }
        axios.post(url,
            userData,
            {headers})
            .then(res => {
                if(res.status === 201) {
                    alert('할일이 추가 되었습니다.');
                    setTodos(todos.concat(res.data));
                    todoRef.current.value = "";
                }
            })
            .catch(err => {
                console.log(err);
                alert('입력한 내용을 다시 확인해주세요.');
            });

    }
    //수정 취소 기능
    const cancelHandler = () => {
        setMode(!mode);
    }
    //읽음 표시 기능
    const checkHandler = (th, params) => {
        const updateData = {
            todo: params.todo,
            isCompleted: th.checked
        }
        axios.put(url+`/${params.id}`,
            updateData,
            {headers})
            .then(res => {
                console.log(res.data.isCompleted);
                setTodos(todos.map(item => 
                    item.id === params.id ? {...item, isCompleted : res.data.isCompleted} : item
                ))
            })
            .catch(err => {
                console.log(err);
                alert('읽음을 표시하는데 실패하였습니다.');
                todoRef.current.value = "";
            })
    }
    //수정 버튼 클릭에 따라 조건부 렌더링
    if(mode === true) {
        return <>
            <ul>
                <li><input type="text" className="todo-input" ref={updateRef} placeholder={todoOne.todo}/> <button onClick={() => updateConfirmHandler(todoOne)}>수정완료</button><button onClick={cancelHandler}>취소</button></li>
            </ul>
        </>
    } else {
        return <>
            <div className="todo-div">
                <div className="todo-input-div"><input type="text" id="todo" name="todo" placeholder="해야할 일을 추가해주세요." ref={todoRef}/></div>
                <button onClick={createHandler}>추가</button>
            </div>
            <ul>
                {
                    todos.map((item,i) => (
                        <li key={i}><input type="checkbox" checked={item.isCompleted || false} onChange={(e) => checkHandler(e.target, item)}/> <span>{item.todo}</span> <button onClick={() => updateHandler(item)}>수정</button><button onClick={() => deleteHandler(item.id)}>삭제</button></li>
                    ))
                }
            </ul>
        </>
    }
}