import './PostBoard.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PostBoard = () => {
    const nav = useNavigate();
    // list 값
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    // 현재 날짜
    const today = new Date(); 
    const year = today.getFullYear(); 
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0'); 
    const date = (`${year}-${month}-${day}`);

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeContent = (e) => {
        setContent(e.target.value)
    }

    // post
    const postData = async () => {
        const postData = {
            brd_type: "thesis",
            brd_category: "기술개발부",
            brd_sub_category: "",
            brd_title: title,
            brd_content: content,
            brd_link: null,
            brd_file: null,
            brd_filename: null,
            reg_datetime: date,
            upd_datetime: "",
            brd_ext_startdate: null,
            brd_ext_enddate: null,
            brd_ext1: "국내",
            brd_ext2: "한국대기환경학회",
            brd_ext3: null,
            brd_ext4: null,
            brd_ext5: null,
            brd_status: "Y",
            brd_pick: "N",
            prd_filepath: null,
            prd_filename: null
        };
    
        try {
            const response = await fetch("/board", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            await response.json();

            if(response.ok) {
                alert('등록 되었습니다.');
                nav('/presentaion')
            }
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };

    // 취소시
    const cancleBtn = () => {
        if(!confirm("등록을 취소하시겠습니까?")){
            return
        }else{
            nav('/presentaion')
        }
    }

    return (
        <div className="PostBoard">
            <div className="list_wrap">
                <div className="list_title">
                    <h2>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={changeTitle} 
                            placeholder="제목을 입력하세요" 
                        />
                    </h2>
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
                    <button className="save_button" onClick={() => postData()}>저장</button>
                </div>
            </div>
        </div>
    )
}

export default PostBoard;