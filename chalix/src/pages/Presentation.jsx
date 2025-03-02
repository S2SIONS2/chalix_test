import './Presentation.css'

import { useEffect, useRef, useState } from 'react';
import Topbutton from '../components/Topbutton';

import img1 from '../assets/7.png'
import img2 from '../assets/8.png'
import gsap from 'gsap';
import Board from '../components/board';

const Presentation = () => {
    const imgWrapRef = useRef();
    const textRef = useRef();
    // 화면 width
    const [webWidth, setWebWidth] = useState();
    useEffect(() => {
        const handleResize = () => {
            setWebWidth(document.body.offsetWidth);
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // text 나타내기
    const titleText1 = 'Driving innovation';
    const titleText2 = 'with impactful research'

    useEffect(() => {
        // 로드시 이미지 슬라이드
        setWebWidth(document.body.offsetWidth)
        
        gsap.to(
            imgWrapRef.current,
            {translateX: `-${webWidth}px`, duration: 1},
        )

        // 글자 
        const spans = Array.from(textRef.current.querySelectorAll('span'));
        const shuffledSpans = gsap.utils.shuffle(spans);
        gsap.to(shuffledSpans,
            // textRef.current.querySelectorAll('span'),
            {
                opacity: 1, 
                duration: 0.01, 
                stagger: {
                    each: 0.03,
                    random: true 
                }
            }
        )
    }, [webWidth])
    return (
        <div className="Presentation">
            <Topbutton />
            <section className='intro'>
                <div className='title_wrap'>
                    <h1 ref={textRef}>
                        {
                            titleText1.split('').map((char, index) => (
                                <span key={index}>
                                    {char === ' ' ? "\u00A0" : char}
                                </span>
                            ))
                        }
                        <br />
                        {
                            titleText2.split('').map((char, index) => (
                                <span key={index}>
                                    {char === ' ' ? "\u00A0" : char}
                                </span>
                            ))
                        }
                    </h1>
                </div>
                <ul className='board_slider'>
                    <li>
                        사업실적
                    </li>
                    <li className='on'>
                        발표논문
                    </li>
                    <li>
                        NEWS
                    </li>
                </ul>
                <ul className='img_wrap' ref={imgWrapRef}>
                    <li className='img1'>
                        <img src={img1} alt='bgImage' />
                    </li>
                    <li className='img2'>
                        <img src={img2} alt='bgImage' />
                    </li>
                </ul>
            </section>
            <Board />
        </div>
    )
}

export default Presentation;