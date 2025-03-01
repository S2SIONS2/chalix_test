import { useEffect } from 'react';
import Topbutton from '../components/Topbutton';
import './Presentation.css'

const Presentation = () => {
    const fetchData = async () => {
        try{
            const response = await fetch("http://daeho2.shop:8081/board" , {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            return data;
        }catch(error){
            console.log(error)
            const response = await fetch("../../chailx.json" , {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            return data.list;
        }
    }
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
    
            const result = await response.json();
            console.log("Post created:", result);
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="Presentation">
            <Topbutton />
            <section className='intro'>
                <div className='img_wrap'>

                </div>
            </section>
            <section className='board'>
                <button type='button'>게시물 추가</button>
            </section>
        </div>
    )
}

export default Presentation;