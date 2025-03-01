import './footer.css'
import logo from '../assets/logo2.png';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='footer_wrap'>
                <div className='title'>
                    <img src={logo} alt='logo image' />
                    <p>개인정보처리방침</p>
                </div>
                <ul>
                    <li>사업자명: 홍길동 | </li>
                    <li>대표자명: 홍길동 | </li>
                    <li>팩스: 02-1234-5678 | </li>
                    <li>주소: 서울 서초구 서초대로77길 39, 10층 | </li>
                    <li>대표전화: 010-1234-5678 | </li>
                    <li>사업자등록번호: 123-45-67890 | </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;