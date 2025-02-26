import './header.css';
import logo from '../assets/logo2.png';
import menu from '../assets/menu.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    // 반응형 네비
    const [mobileMenu, setMobileMenu] = useState(false);
    const onToggle = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    // 스크롤 시 네비 조절
    const headerRef = useRef(null)
    useEffect(() => {
        // 처음 로드 시 애니메이션
        if (window.scrollY === 0) {
            gsap.fromTo(headerRef.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
        } else {
            gsap.to(headerRef.current, { opacity: 0, y: -100, duration: 0 });
        }
        
        // 스크롤 중 애니메이션
        let lastScroll = 0;
        ScrollTrigger.create({
            start: "top top",
            end: "bottom bottom",
            scrub: false,
            onUpdate: (self) => {
                let currentScroll = self.scroll();
                if (currentScroll > lastScroll) {
                    gsap.to(headerRef.current, { y: -100, duration: 0, opacity: 0});
                } else {
                    if (currentScroll < lastScroll) {
                        gsap.to(headerRef.current, { y: 0, duration: 0, backgroundColor: '#55555575', opacity: 1});
                    }
                    if (currentScroll === 0) {
                        gsap.to(headerRef.current, { duration: 0, backgroundColor:'transparent', opacity: 1 });
                    }
                } 
                lastScroll = currentScroll;
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
        };
    }, []);

    return (
        <header className='header' ref={headerRef}>
            <div className='nav_wrap pc'>
                <nav className='nav'>
                    <a href='#' className='logo'>
                        <img src={logo} alt='logo' />
                    </a>
                    <ul className='nav_menu'>
                        <li>
                            <div className='menu'>
                                <a href='#'>WHO WE ARE</a>
                            </div>
                            <ul className='sub_menu'>
                                <li>
                                    CAIT VALUE
                                </li>
                                <li>
                                    CEO 메시지
                                </li>
                                <li>
                                    연혁
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className='menu'>
                                <a href='#'>WHAT WE CAN</a>
                            </div>
                            <ul className='sub_menu'>
                                <li>
                                    컨설팅부
                                </li>
                                <li>
                                    글로벌연구센터
                                </li>
                                <li>                                   
                                    정책연구부
                                </li>
                                <li>
                                    기술개발부
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className='menu'>
                                <a href='#'>WHAT WE DO</a>
                            </div>
                            <ul className='sub_menu last'>
                                <li>
                                    사업실적
                                </li>
                                <li>
                                    <a href='#'>발표논문</a>
                                </li>
                                <li>
                                    NEWS
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className='menu'>
                                <button type='button' className='contact_btn'>CONTACT</button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='nav_wrap mobile'>
                <div className='mobile_header_wrap'>
                    <a href='#' className='logo'>
                        <img src={logo} alt='logo' />
                    </a>
                    <div className='menu_btn'>
                        <button type='button' 
                            onClick={() => onToggle()}
                        >
                            {
                                mobileMenu ? 'X' : <img src={menu} className='menu' alt='menu' />
                            }
                        </button>
                    </div>
                </div>
                {
                    mobileMenu && (
                        <nav className='nav mobile-nav'>
                            <ul>
                                <li>
                                    WHO WE ARE
                                </li>
                                <li>
                                    WHAT WE CAN
                                </li>
                                <li>
                                    WHAT WE DO
                                </li>
                                <li>
                                    문의하기
                                </li>
                            </ul>
                        </nav>
                    )
                }
            </div>
        </header>  
    )
}

export default Header; 