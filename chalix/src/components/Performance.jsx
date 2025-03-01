import './Performance.css';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
    const sectionRef = useRef(null);
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const imageRef3 = useRef(null);
    const imageRef4 = useRef(null);
    const imageRef5 = useRef(null);

    // 스크롤링 애니메이션
    useEffect(() => {
        // 배경 색 변경
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 50%",
            bottom: "bottom 50%",
            endTrigger: sectionRef.current,
            onEnter: () => {
                gsap.to(sectionRef.current, { backgroundColor: "rgb(32, 32, 32)", duration: 1 });
            },
            onLeaveBack: () => {
                gsap.to(sectionRef.current, { backgroundColor: "#fff", duration: 1 });
            },
        })
    
        // timeline 스크롤링 이벤트
        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 0%",
            end: "bottom 100%",
            scrub: true,
            }
        });
        
        // 이미지 위치 위로
        tl.to(imageRef1.current, {
            top: "50%",
            width: "36.0577%",
            height: "44.9102%",
            filter: "brightness(1)",
            duration: 1,
            ease: "none"
        }, 0)
        .to(imageRef2.current, { top: "0%", duration: 1 }, 0) 
        .to(imageRef3.current, { top: "60%", duration: 1 }, 0)
        .to(imageRef4.current, { top: "10%", duration: 1 }, 0)
        .to(imageRef5.current, { top: "50%", duration: 1 }, 0);
        
        // 이미지 2,3,4,5는 더 위로 1은 커지게
        tl.to(imageRef1.current, {
            top: "50%",
            width: "100%",
            height: "100%",
            filter: "brightness(0.7)",
            duration: 1,
            ease: "none"
        })
        .to(imageRef2.current, { top: "-150%", duration: 1.5 }, "<")
        .to(imageRef3.current, { top: "-150%", duration: 1.5 }, "<")
        .to(imageRef4.current, { top: "-150%", duration: 1.5 }, "<")
        .to(imageRef5.current, { top: "-150%", duration: 1.5 }, "<");
    }, []);
    

    return (
        <section className='Performance' ref={sectionRef}>
            <div className='perform_wrap'>
                <div className='sticky'>
                    <h1>
                        Environmental <br className='mobile'/> consultancy firm 
                        <br />
                        offering high-value <br className='mobile'/> advisory services
                    </h1>
                    <button type='button' className='btn'>
                        <span>사업실적</span>
                        <span className='arrow'>→</span>
                    </button>
                    <div className='img_wrap img_wrap1' ref={imageRef1}>
                        <img src={image1} alt='bg_img' />
                    </div>
                    <div className='img_wrap img_wrap2' ref={imageRef2}>
                        <img src={image2} alt='bg_img' />
                    </div>
                    <div className='img_wrap img_wrap3' ref={imageRef3}>
                        <img src={image3} alt='bg_img' />
                    </div>
                    <div className='img_wrap img_wrap4' ref={imageRef4}>
                        <img src={image4} alt='bg_img' />
                    </div>
                    <div className='img_wrap img_wrap5' ref={imageRef5}>
                        <img src={image5} alt='bg_img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Performance;