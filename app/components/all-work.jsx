import { workData } from '@/assets/assets';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navber from './Navber';
import Footer from './Footer';



const AllWork = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <div className="min-h-screen">
            
            <Navber/>
            <div className='w-full px-[12%] py-32'>
                <h2 className='text-center text-5xl font-Ovo mb-12'>All Projects</h2>
                
                {/* SHOWS EVERY VIDEO IN ASSETS.JS */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {workData.map((project, index) => (
                        <div key={index} onClick={() => setSelectedVideo(project)} className="aspect-square relative rounded-lg overflow-hidden cursor-pointer">
                             <video src={project.mediaSource} className="w-full h-full object-cover" loop muted autoPlay playsInline />
                             <div className="absolute bottom-4 left-4 text-white z-10">
                                <h3 className="font-bold">{project.title}</h3>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX FOR ALL WORK PAGE */}
            <AnimatePresence>
                {selectedVideo && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95" onClick={() => setSelectedVideo(null)}>
                        <video src={selectedVideo.mediaSource} className="max-w-5xl w-full" autoPlay controls />
                    </div>
                )}
            </AnimatePresence>

            <Footer/>
        </div>
    );
};

export default AllWork;