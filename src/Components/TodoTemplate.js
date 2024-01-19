import React from 'react';
import '../TodoTemplate.scss';

const TodoTemplate=({children})=>{  //(props)대신 괄호 안에 바로
    // children을 넣어 주니 return 안에서 props.children대신 children으로만 사용이 가능

    return (
        <div className='TodoTemplate'>
        <div className='Todo-title'>일정 관리</div>
        <div className='Todo-content'>{children}</div>
        </div>
    );
};

export default TodoTemplate;