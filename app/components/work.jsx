import { assets, workData } from '@/assets/assets';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { motion, AnimatePresence } from 'motion/react';

// Reuseable Video Card Component
const VideoCard = ({ project, onClick }) => {
    const videoRef = useRef(null);
    useEffect(() => { if (videoRef.current) videoRef.current.play().catch(() => {}); }, []);

    return (
        <motion.div
            onClick={() => onClick(project)}
            whileHover={{ scale: 1.05 }}
            className='aspect-square rounded-lg relative group overflow-hidden bg-gray-100 cursor-pointer'
        >
            <video ref={videoRef} src={project.mediaSource} className="absolute inset-0 w-full h-full object-cover" loop muted playsInline />
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-10'>
                <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                    <Image alt='send' src={assets.send_icon} className='w-5' />
                </div>
            </div>
        </motion.div>
    );
};

const Work = ({ isDarkMode }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>

            {/* ONLY SHOW FIRST 4 VIDEOS */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5 dark:text-black'>
                {workData.slice(0, 4).map((project, index) => (
                    <VideoCard key={index} project={project} onClick={setSelectedVideo} />
                ))}
            </div>

            <Link href="/all-work">
                <div className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white'>
                    show more <Image alt='' src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} className='w-4' />
                </div>
            </Link>

            {/* Lightbox logic remains the same */}
            <AnimatePresence>
                {selectedVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={() => setSelectedVideo(null)}>
                        <video src={selectedVideo.mediaSource} className="max-w-6xl w-full aspect-video" autoPlay controls onClick={(e) => e.stopPropagation()} />
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Work;