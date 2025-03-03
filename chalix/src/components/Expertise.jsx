import './Expertise.css';
import scale1 from '../assets/scale1.jpg';
import scale2 from '../assets/scale2.jpg';
import scale3 from '../assets/scale3.jpg';
import scale4 from '../assets/scale4.jpg';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger, Draggable);

const Expertise = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef1 = useRef(null);
    const contentRef2 = useRef(null);

    // desktop view
    const boxWrapRef = useRef(null);
    const boxRef1 = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);
    const boxRef4 = useRef(null);

    // mobile view
    // slide ref
    const slideRef = useRef(null);

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            let ctx = gsap.context(() => {
                // 텍스트 애니메이션
                gsap.fromTo(
                    titleRef.current.querySelectorAll("span"),
                    { y: "100%", opacity: 0 },
                    { y: "0%", opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out", scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 20%",
                    }}
                );

                gsap.fromTo(
                    contentRef1.current.querySelectorAll("span"),
                    { y: "100%", opacity: 0 },
                    { y: "0%", opacity: 1, stagger: 0.05, duration: 0.7, ease: "power2.out", delay: 0.3, scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 20%",
                    }}
                );

                gsap.fromTo(
                    contentRef2.current.querySelectorAll("span"),
                    { y: "100%", opacity: 0 },
                    { y: "0%", opacity: 1, stagger: 0.05, duration: 0.7, ease: "power2.out", delay: 0.6, scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 20%",
                    }}
                );

                // li 스크롤 시 등장
                let tl = gsap.timeline({
                    paused: true,
                    preventOverlaps: true,
                });
                
                tl.to(boxRef1.current, { width: `calc(${25}vw - ${33}px)`, duration: 0.5, ease: "power2.inOut" })
                .to(boxRef2.current, { width: `calc(${25}vw - ${33}px)`, duration: 0.5, ease: "power2.inOut" }, "-=0.4")
                .to(boxRef3.current, { width: `calc(${25}vw - ${33}px)`, duration: 0.5, ease: "power2.inOut" }, "-=0.4")
                .to(boxRef4.current, { width: `calc(${25}vw - ${33}px)`, duration: 0.5, ease: "power2.inOut" }, "-=0.4");
                
                ScrollTrigger.create({
                    trigger: boxRef2.current,
                    start: "bottom 100%",
                    end: "bottom 0%",
                    toggleActions: "play none none none",
                    scrollBehavior: "lock",
                    onEnter: () => {
                        tl.play();
                    },
                    onLeaveBack: () => {
                        tl.reverse();
                        }
                    });

                });

            return () => ctx.revert();
        });

        // mobile slide
        mm.add("(max-width: 767px)", () => {
            let ctx = gsap.context(() => {
                const slides = gsap.utils.toArray(slideRef.current.querySelectorAll(".Expertise .content_bottom li"));
                const wrap = gsap.utils.wrap(0, slides.length);
                let index = 0;

                // 슬라이드 이동 함수
                const moveSlide = (direction) => {
                    index = wrap(index + direction);
                    gsap.to(slides, {
                        xPercent: -100 * index,
                        duration: 0.5,
                        ease: "power2.inOut",
                    });
                };

                // 버튼 클릭 이벤트
                const prevButton = document.querySelector('.leftBtn');
                const nextButton = document.querySelector('.rightBtn');

                prevButton.addEventListener('click', () => moveSlide(-1));
                nextButton.addEventListener('click', () => moveSlide(1));

                // 드래그 기능 추가
                Draggable.create(slideRef.current, {
                    type: "x",
                    bounds: slideRef.current,
                    inertia: true,
                    onDragEnd: function () {
                        const direction = this.getDirection() === "left" ? 1 : -1;
                        moveSlide(direction);
                    },
                });

                return () => {
                    prevButton.removeEventListener('click', () => moveSlide(-1));
                    nextButton.removeEventListener('click', () => moveSlide(1));
                };
            });

            return () => ctx.revert();
        });


    }, []);

    return (
        <section className='Expertise' ref={sectionRef}>
            <div className='content_top'>
                <div className='Expertise_title' ref={titleRef}>
                    {"Our Expertise".split("").map((char, index) => (
                        <span key={index} style={{ display: "inline-block" }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </div>
                <p className='Expertise_content'>
                    <span ref={contentRef1}>
                        {"깊이 있는 전문 지식으로".split("").map((char, index) => (
                            <span key={index} style={{ display: "inline-block" }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                    <br />
                    <span ref={contentRef2}>
                        {"지속 가능한 미래를 설계합니다.".split("").map((char, index) => (
                            <span key={index} style={{ display: "inline-block" }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                </p>
            </div>

            <div className='content_bottom' ref={boxWrapRef}>
                <ul ref={slideRef}>
                    <li ref={boxRef1}>
                        <img src={scale1} alt='scale1' />
                        <div className='text_wrap'>
                            <h1>
                                <span>컨설팅부</span>
                                <button type='button' className='mobile'>더보기</button>
                            </h1>
                            <p>다양한 경험과 노하우를 바탕으로 기후변화 대응 최적전략 수립 및 탄소배출권 관리 및 국가와 기업의 경쟁력을 고취합니다.</p>
                        </div>
                    </li>
                    <li ref={boxRef2}>
                        <img src={scale2} alt='scale2' />
                        <div className='text_wrap'>
                            <h1>
                                <span>글로벌연구센터</span>
                                <button type='button' className='mobile'>더보기</button>
                            </h1>
                            <p>기후변화 대응 및 ESG 경영 선도를 위해 국제개별협력, 정책연구, 신재생에너지 및 탄소감축 사업 등 다양한 현지 맞춤형 솔루션을 제공합니다.</p>
                        </div>
                    </li>
                    <li ref={boxRef3}>
                        <img src={scale3} alt='scale3' />
                        <div className='text_wrap'>                            
                            <h1>
                                <span>정책연구부</span>
                                <button type='button' className='mobile'>더보기</button>
                            </h1>
                            <p>국가, 지방자치단체, 사업장 등이 환경분야 및 기후변화에 선도적으로 대응할 수 있도록 정책 개발 및 대안 마련합니다.</p>
                        </div>
                    </li>
                    <li ref={boxRef4}>
                        <img src={scale4} alt='scale4' />
                        <div className='text_wrap'>                            
                            <h1>
                                <span>기술개발부</span>
                                <button type='button' className='mobile'>더보기</button>
                            </h1>
                            <p>세균 및 바이러스 제거, 지속적인 효과, 환경 친화적인 항균ᆞ항바이러스 나노물질의 개발로 새로운 제품과 서비스를 제공합니다</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='slide_button_wrap'>
                <button type='button' className='leftBtn'> &lt; </button>
                <button type='button' className='rightBtn'> &gt; </button>
            </div>
        </section>
    );
};

export default Expertise;
