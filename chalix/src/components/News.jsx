import './News.css';
import icon1 from '../assets/2-1.png';
import icon2 from '../assets/2-2.png';
import icon3 from '../assets/2-3.png';
import icon4 from '../assets/2-4.png';
import icon5 from '../assets/2-5.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const News = () => {
    const sectionRef = useRef(null);
    const newsContentRef1 = useRef(null);
    const newsContentRef2 = useRef(null);
    const newsContentRef3 = useRef(null);
    const newsContentRef4 = useRef(null);
    const newsContentRef5 = useRef(null);
    const newsContentRef6 = useRef(null);

    useEffect(() => {
        // 스크롤 애니메이션
        ScrollTrigger.create({
            trigger: newsContentRef1.current,
            start: "bottom 100%",
            once: true,
            toggleActions: "play none none none",
            onEnter: () => {
                gsap.fromTo(
                    newsContentRef1.current.querySelectorAll("span"),
                    { y: "100%", opacity: 0 },
                    { y: "0%", opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out"}
                )
                gsap.fromTo(
                    newsContentRef2.current.querySelectorAll("span"),
                    { y: "100%", opacity: 0 },
                    { y: "0%", opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out"}
                )
            }
        })
        ScrollTrigger.create({
            trigger: newsContentRef3.current,
            start: "bottom 100%",
            once: true,
            toggleActions: "play none none none",
            onEnter: () => {
                gsap.fromTo(
                    newsContentRef3.current.querySelectorAll("span"),
                    { y: "100%", opacity: 0 },
                    { y: "0%", opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out", delay: 0.3}
                )
                gsap.fromTo(
                    newsContentRef4.current.querySelectorAll("span"),
                    { y: "100%", opacity: 0 },
                    { y: "0%", opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out", delay: 0.3}
                )
            }
        })
        ScrollTrigger.create({
            trigger: newsContentRef5.current,
            start: "bottom 100%",
            once: true,
            toggleActions: "play none none none",
            onEnter: () => {
                gsap.fromTo(
                    newsContentRef5.current.querySelectorAll("span"),
                    { y: "100%", opacity: 0 },
                    { y: "0%", opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out", delay: 0.3}
                )
            }
        })
        ScrollTrigger.create({
            trigger: newsContentRef6.current,
            start: "bottom 100%",
            once: true,
            toggleActions: "play none none none",
            onEnter: () => {
                gsap.fromTo(
                    newsContentRef6.current.querySelectorAll("span"),
                    { y: "100%", opacity: 0 },
                    { y: "0%", opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out", delay: 0.3}
                )
            }
        })
    }, [])
    return (
        <section className='News' ref={sectionRef}>
            <div className='container'>
                <ul>
                    <li className='newsContent point big'>
                        <h3>Latest News</h3>
                        <a href='#' ref={newsContentRef1}>
                            {"순환경제사회법 시행령 일부개정령안 입법예고".split("").map((char, index) => (
                                <span key={index}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </a>
                    </li>
                    <li></li>
                    <li className='newsContent'>
                        <div className='icon'>
                            <img src={icon1} alt='icon1' />
                        </div>
                        <a href='#' ref={newsContentRef2}>
                            {"신뢰와 정확성을 바탕으로하는 카이트 엔지니어링".split("").map((char, index) => (
                                <span key={index}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}                    
                        </a>
                    </li>
                    <li className='pc'></li>
                    <li className='pc'></li>
                    <li className='pc'></li>
                    <li className='newsContent'>
                        <div className='icon'>
                            <img src={icon2} alt='icon2' />
                        </div>
                        <a href='#' ref={newsContentRef3}>
                            {"신뢰와 정확성을 바탕으로하는 카이트 엔지니어링".split("").map((char, index) => (
                                <span key={index}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </a>
                    </li>
                    <li></li>
                    <li className='mobile'></li>
                    <li className='newsContent'>
                        <div className='icon'>
                            <img src={icon3} alt='icon3' />
                        </div>
                        <a href='#' ref={newsContentRef4}>
                            {"고객 맞춤형 환경 솔루션 제공".split("").map((char, index) => (
                                <span key={index}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </a>
                    </li>
                    <li className='pc'></li>
                    <li className='newsContent'>
                        <div className='icon'>
                            <img src={icon4} alt='icon4' />
                        </div>
                        <a href='#' ref={newsContentRef5}>
                            {"신뢰와 정확성을 바탕으로하는 카이트 엔지니어링".split("").map((char, index) => (
                                <span key={index}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </a>
                    </li>
                    <li></li>
                    <li className='mobile'></li>
                    <li className='newsContent'>
                        <div className='icon'>
                            <img src={icon5} alt='icon5' />
                        </div>
                        <a href='#' ref={newsContentRef6}>
                            {"고객 맞춤형 환경 솔루션 제공".split("").map((char, index) => (
                                <span key={index}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </a>
                    </li>
                    <li className='pc'></li>
                    <li className='pc'></li>
                    <li className='pc'></li>
                    <li className='newsContent point small'>
                        <a href='#'>
                            <span>바로가기</span>
                            <span className='arrow'>↑</span> 
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default News;