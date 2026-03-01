import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = ({isDarkMode}) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image alt='' src={isDarkMode ? assets.logo_dark : assets.logo} className='w-36 mx-auto mb-2' />

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image alt='' src={ isDarkMode ? assets.mail_icon_dark : assets.mail_icon} className='w-6'/>
                    salmansadiq1232@gmail.com
                </div>
                <div className='w-max flex items-center gap-2 mx-auto'>
                    +923289134036
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 M.Salman All right reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a  target='_blank' href="https://www.instagram.com/edits.by.salman/">Instagram</a></li>
                    <li><a  target='_blank' href="https://www.fiverr.com/salmansadiq2331?source=gig_page">Fiverr</a></li>
                    <li><a  target='_blank' href="https://www.tiktok.com/@edits.by.salman?is_from_webapp=1&sender_device=pc">TikTok</a></li>
                </ul>
            </div>
        </div>
    );   
}

export default Footer;
