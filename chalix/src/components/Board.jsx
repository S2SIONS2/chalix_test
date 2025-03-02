import './Board.css';
import { useEffect, useState } from 'react';
import BoardList from './BoardList';
import { useNavigate } from 'react-router-dom';

const Board = () => {
    // board read
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const nav = useNavigate();

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch("http://daeho2.shop:8081/board", {
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
        } catch (error) {
            if(error){
                alert('현재 json서버가 이상하여 파일에 있는 값으로 대체합니다.')
            }
            const response = await fetch("../../chailx.json", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setList(data.list || []); // 데이터가 없는 경우 빈 배열 설정
        } finally {
            setLoading(false); // 로딩 완료
        }
    };

    const postNav = () => {
        nav('/postboard')
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    if(loading) {
        <div>Loading...</div>
    }

    return (
        <section className="Board">
            <div className='btn_wrap'>
                <button type='button' onClick={postNav}>게시물 추가</button>
            </div>
            <div className='table_wrap'>
                <div className='table_thead'>
                    <div className='td td1'>번호</div>
                    <div className='td td6'>학술대회명</div>
                    <div className='td td6'>논문명</div>
                    <div className='td td2'>날짜</div>
                    <div className='td td2'>비고(국내/해외)</div>
                </div>
                <ol className='table_tbody'>
                    {
                        list
                            .sort((a, b) => new Date(b.reg_datetime) - new Date(a.reg_datetime)) // reg_datetime 내림차순 정렬
                            .map((item) => (
                                <BoardList 
                                    key={item.id}
                                    {...item}
                                />
                            ))
                    }
                </ol>
            </div>
        </section>
    )
}

export default Board;