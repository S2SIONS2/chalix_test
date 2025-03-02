import './Board.css';
import { useEffect, useState } from 'react';
import BoardList from './BoardList';

const Board = () => {
     // board read
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
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

    // post
    const postData = async () => {
        const postData = {
            brd_type: "thesis",
            brd_category: "기술개발부",
            brd_sub_category: "",
            brd_title: "Efficient Removal of Toluene, p-Xylene VOCs and Pathogen using Mesoporous Al2O3 beads decorated Copper Metal Organic Framework (Cu-CPP) for Air Treatment",
            brd_content: "<p>.</p>",
            brd_link: null,
            brd_file: null,
            brd_filename: null,
            reg_datetime: "2024-10-11T05:23:44.000Z",
            upd_datetime: "2024-10-11T05:23:44.000Z",
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
            const response = await fetch("http://daeho2.shop:8081/board", {
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
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };
    
    useEffect(() => {
        fetchData()
    }, [])

    if(loading) {
        <div>Loading...</div>
    }

    return (
        <section className="Board">
            <button type='button' onClick={() => postData}>게시물 추가</button>
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
                        list.map((item) => (
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