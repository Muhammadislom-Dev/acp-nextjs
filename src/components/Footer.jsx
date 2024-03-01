import React from 'react'
import Logo from '../../logo.jpg'
import InstargramSvg from '@/icons/InstargramSvg'
import TelegramSvg from '@/icons/TelegramSvg'
import YouTubeSvg from '@/icons/YouTubeSvg'
import FacebookSvg from '@/icons/FacebookSvg'
const Footer = () => {
    return (
        <footer className='footer-section px-10 py-8'>
            <div className='footer__internal-div rounded-lg flex justify-between py-7 px-10'>
                <ul className='text-white'>
                    <li classame="">KOMPANYAMIZ HAQIDA</li>
                    <li><img src='../../logo.jpg' alt='Logo image' /></li>
                    <li>ALSTAR - 'GOLDEN HAPPINESS' MChJga tegishli, <br />PE, FR-B1, FR-A2 turidagi alyumin kompozit<br />panellar (AKP) brendi</li>
                    <li className='flex items-center'>
                        <InstargramSvg />
                        <TelegramSvg />
                        <FacebookSvg />
                        <YouTubeSvg />
                    </li>
                </ul>
                <ul className='text-white'>
                    <li>Tezkor havolalar</li>
                    <li>BIZ HAQIMIZDA</li>
                    <li>MAHSULOTLAR</li>
                    <li>YANGILIKLAR</li>
                    <li>LOYIHALAR</li>
                    <li>ALOQA</li>
                </ul>
                <ul className='text-white'>
                    <li>ALOQA</li>
                    <li>«GOLDEN HAPPINESS» Узбекистан, г. Ташкент</li>
                    <li>info@alstar.uz</li>
                    <li>+998 94 669 00 06</li>
                    <li>+998 77 000 87 00</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer