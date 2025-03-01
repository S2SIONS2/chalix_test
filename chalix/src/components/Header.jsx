import './header.css';
import logo from '../assets/logo2.png';
import menu from '../assets/menu.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    // 반응형 네비
    const [mobileMenu, setMobileMenu] = useState(false);
    const onToggle = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    // 스크롤 시 네비 조절
    const headerRef = useRef(null) // 전체 header 
    const pcHeaderRef = useRef(null) // pc용 header
    useEffect(() => {
        // 처음 로드 시 애니메이션
        if(window.scrollY !== 0){
            gsap.to(
                headerRef.current,
                { top: -100, duration: 0 }
            )
        }
        
        let lastScroll = 0;
        ScrollTrigger.create({
            start: "top top",
            end: "bottom bottom",
            scrub: false,
            onUpdate: (self) => {
                let currentScroll = self.scroll();
                if(window.scrollY !== 0){
                    gsap.to(
                        headerRef.current,
                        { top: -100, duration: 0 }
                    )
                }
                
                if (currentScroll > lastScroll) {
                    gsap.to(pcHeaderRef.current, { y: -100, duration: 0,});
                } else {
                    if (self.direction === -1) {
                        gsap.to(headerRef.current, { top: 0 })
                        gsap.to(pcHeaderRef.current, { y: 0, duration: 0, backgroundColor: '#55555575'});
                    }
                    if (currentScroll === 0) {
                        gsap.to(pcHeaderRef.current, { backgroundColor:'transparent', duration: 0, top: 0 });
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
            <div className='nav_wrap pc' ref={pcHeaderRef}>
                <nav className='nav'>
                    <Link to={'/'} className='logo'>
                        <img src={logo} alt='logo' />
                    </Link>
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
                                    <Link to={'/presentaion'}>
                                        발표논문
                                    </Link>
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
                    <Link to={'/'} className='logo'>
                        <img src={logo} alt='logo' />
                    </Link>
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