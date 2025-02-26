import './intro.css';

import bgVideo from '../assets/mainvid.mp4';
import { useEffect, useState } from 'react';

const Intro = () => {
    const text = '지속 가능한 미래와 고객의 비즈니스 성공을 위한 혁신적인 환경 솔루션을 제공합니다';
    const [title, setTitle] = useState([]);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (count === 0) {
            const delayStart = setTimeout(() => setCount(1), 800);
            return () => clearTimeout(delayStart);
        }
    
        if (count > text.length) return;
    
        const typing = setTimeout(() => {
            setTitle((prev) => [...prev, text[count - 1] === ' ' ? '\u00A0' : text[count - 1]]);
            setCount((prev) => prev + 1);
        }, 25);
    
        return () => clearTimeout(typing);
    }, [count]);
    
    

    return (
        <section className="intro">
            <div className="intro_wrap">
                <div className="intro_text_wrap">
                    <div className="intro_text">
                        <h1 className='intro_title'>
                            {title.map((char, index) => (
                                <span key={index} style={{opacity: 1}}>
                                    {char}
                                </span>
                            ))}
                        </h1>
                    </div>
                </div>
                <div className="intro_video">
                    <video src={bgVideo} autoPlay muted loop />
                </div>
            </div>
        </section>
    )
}

export default Intro;