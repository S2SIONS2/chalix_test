import { useEffect, useState } from 'react';
import './UpdateBoard.css';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateBoard = () => {
    const location = useLocation();
    const nav = useNavigate()
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    // 수정할 list 값
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    // board read
    const fetchData = async () => {
        try {
            setLoading(true)
            const listId = location.state.id // id로 list get
            const response = await fetch(`http://daeho2.shop:8081/board?id=${listId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            setList(data);
            setTitle(data[0].brd_title)
            setContent(data[0].brd_content.replace(/<[^>]*>/g, ''))
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData()
    },[])

    // list 수정
    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeContent = (e) => {
        setContent(e.target.value)
    }
    // 현재 날짜
    const today = new Date(); 
    const year = today.getFullYear(); 
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0'); 
    const date = (`${year}-${month}-${day}`);

    // board update
    const updateBtn = async () => {
        const listId = location.state.id

        try{
            const params = {
                id: location.state.id,
                brd_title: title,
                brd_content: content,
                upd_datetime: date
            }
            const response = await fetch(`http://daeho2.shop:8081/board/${listId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            if (response.ok) {
                alert('게시물이 수정 되었습니다.')
                nav('/presentaion')
            }
        }catch(error){
            console.error(error)
        }
    }

    // 취소시
    const cancleBtn = () => {
        if(!confirm("수정을 취소하시겠습니까?")){
            return
        }else{
            nav('/presentaion')
        }
    }

    // 리스트 삭제
    const deleteBtn = async () => {
        if(!confirm("게시물을 삭제하시겠습니까?")){
            return
        }else{
            const listId = location.state.id

            try{
                const response = await fetch(`http://daeho2.shop:8081/board/${listId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                if (response.ok) {
                    alert('게시물이 삭제 되었습니다.')
                    nav('/presentaion')
                }
            }catch(error){
                console.error(error)
            }
        }
    }

    if(loading) {
        <div>Loading...</div>
    }

    return (
        <div className="UpdateBoard">
            {
                list.map((item) => (
                    <div key={item.id} className="list_wrap">
                        <div className="list_title">
                            <h2>
                                <input 
                                    type="text" 
                                    value={title} 
                                    onChange={changeTitle} 
                                    placeholder="제목을 입력하세요" 
                                />
                            </h2>
                            <span className="reg_datetime">{item.reg_datetime}</span>
                        </div>
                        <div className="list_content">
                            <textarea 
                                value={content} 
                                onChange={changeContent} 
                                placeholder="내용을 입력하세요"
                            />
                        </div>
                        <div className="button_group">
                            <button className="cancel_button" onClick={cancleBtn}>취소</button>
                            <button className="save_button" onClick={() => updateBtn()}>저장</button>
                            <button className='delete_button' onClick={() => deleteBtn()}>삭제</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default UpdateBoard;