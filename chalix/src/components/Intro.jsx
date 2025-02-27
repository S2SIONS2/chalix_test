import './intro.css';

import bgVideo from '../assets/mainvid.mp4';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Intro = () => {
    const text = '지속 가능한 미래와 고객의 비즈니스 성공을 위한 혁신적인 환경 솔루션을 제공합니다';
    const textRef = useRef();
    useEffect(() => {
        gsap.fromTo(
            textRef.current.querySelectorAll("span"),
            { opacity: 0 },
            { opacity: 1, stagger: 0.03, duration: 0.25, ease: "none", delay: 1, }
        )
    }, [])
    
    return (
        <section className="intro">
            <div className="intro_wrap">
                <div className="intro_text_wrap">
                    <div className="intro_text">
                        <h1 className='intro_title' ref={textRef}>
                            {text.split("").map((char, index) => (
                                <span key={index}>
                                    {char === " " ? "\u00A0" : char}
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