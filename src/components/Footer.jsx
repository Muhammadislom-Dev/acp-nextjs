import React from 'react'
import Logo from '../../public/logo.jpg'
import InstargramSvg from '@/icons/InstargramSvg'
import TelegramSvg from '@/icons/TelegramSvg'
import YouTubeSvg from '@/icons/YouTubeSvg'
import FacebookSvg from '@/icons/FacebookSvg'
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className='footer-section px-10 py-8 flex justify-center'>
            <div className='container'>
                <div className='footer__internal-div rounded-3xl flex gap-6 xl:gap-0 justify-between py-7 px-10 flex-wrap xl:flex-nowrap'>
                    <ul className='text-white w-full md:w-4/12'>
                        <li className='flex items-center gap-2 justify-center md:justify-normal'>
                            <Image className='rounded-md' width={100} src={Logo} alt='logo image' />
                            {/* <span className='text-base xl:text-lg font-medium'>KOMPANYAMIZ HAQIDA</span> */}
                        </li>
                        <li className='text-xs py-4 text-center md:text-start'>ALSTAR - 'GOLDEN HAPPINESS' MChJga tegishli, <br />PE, FR-B1, FR-A2 turidagi alyumin kompozit<br />panellar (AKP) brendi</li>
                        <li className='flex items-center gap-4 justify-center md:justify-start'>
                            <InstargramSvg />
                            <TelegramSvg />
                            <FacebookSvg />
                            <YouTubeSvg />
                        </li>
                    </ul>
                    <ul className='text-white  w-full md:w-4/12'>
                        <li className='text-base xl:text-lg font-medium pb-4 text-center md:text-start'>Tezkor havolalar</li>
                        <li className='text-sm hover:text-red-800 hover:cursor-pointer hover:duration-150 text-center md:text-start'>BIZ HAQIMIZDA</li>
                        <li className='text-sm hover:text-red-800 hover:cursor-pointer hover:duration-150 py-2 text-center md:text-start'>MAHSULOTLAR</li>
                        <li className='text-sm hover:text-red-800 hover:cursor-pointer hover:duration-150 text-center md:text-start'>YANGILIKLAR</li>
                        <li className='text-sm hover:text-red-800 hover:cursor-pointer hover:duration-150 py-2 text-center md:text-start'>LOYIHALAR</li>
                        <li className='text-sm hover:text-red-800 hover:cursor-pointer hover:duration-150 text-center md:text-start'>ALOQA</li>
                    </ul>
                    <ul className='text-white w-full md:w-4/12 '>
                        <li className='text-base xl:text-lg font-medium pb-4 text-center md:text-start'>ALOQA</li>
                        <li className='text-sm hover:text-red-800 hover:cursor-pointer hover:duration-150 text-center md:text-start'>«GOLDEN HAPPINESS» Узбекистан, г. Ташкент</li>
                        <li className='text-sm hover:text-red-800 hover:cursor-pointer hover:duration-150 py-2 text-center md:text-start'>info@alstar.uz</li>
                        <li className='text-sm hover:text-red-800 hover:cursor-pointer hover:duration-150 text-center md:text-start'>+998 94 669 00 06</li>
                        <li className='text-sm hover:text-red-800 hover:cursor-pointer hover:duration-150 pt-2 text-center md:text-start'>+998 77 000 87 00</li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer