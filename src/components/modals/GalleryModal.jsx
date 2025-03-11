import "./GalleryModal.scss"
import React, {useEffect, useState} from 'react'
import {Modal, ModalWindowTransparent} from "/src/components/modals/Modal.jsx"
import {useUtils} from "/src/helpers/utils.js"
import {useScheduler} from "/src/helpers/scheduler.js"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Zoom, Pagination } from 'swiper/modules'
import {useFeedbacks} from "/src/providers/FeedbacksProvider.jsx"
import {useWindow} from "/src/providers/WindowProvider.jsx"

const RATIO_CLASSES = {
    "16:9": "swiper-slide-landscape",
    "9:16": "swiper-slide-portrait",
}

function GalleryModal({ displayingGallery, hideGallery }) {
    const {showActivitySpinner, hideActivitySpinner} = useFeedbacks()
    const utils = useUtils()
    const scheduler = useScheduler()
    const {isBreakpoint} = useWindow()

    const [images, setImages] = useState(null)
    const [aspectRatio, setAspectRatio] = useState(null)
    const tag = 'gallery'
    const direction = aspectRatio === '16:9' && !isBreakpoint('xl') && !utils.isAndroid() ? 'vertical' : 'horizontal'

    useEffect(() => {
        if (!displayingGallery) return;
    
        showActivitySpinner(tag);
        scheduler.clearAllWithTag(tag);
    
        scheduler.schedule(() => {
            console.log("Received Images:", displayingGallery.screenshots);
            console.log("Received Aspect Ratio:", displayingGallery.aspectRatio);
    
            setImages(displayingGallery.screenshots || []);
    
            let ratio = displayingGallery.aspectRatio;
            
            // If aspect ratio is null, try calculating it from the first image
            if (!ratio && displayingGallery.screenshots.length > 0) {
                const img = new Image();
                img.src = utils.resolvePath(displayingGallery.screenshots[0]);
    
                img.onload = () => {
                    const width = img.width;
                    const height = img.height;
    
                    if (width && height) {
                        ratio = width > height ? "16:9" : "9:16"; // Determine aspect ratio
                        setAspectRatio(ratio);
                        console.log("Calculated Aspect Ratio:", ratio);
    
                        if (!RATIO_CLASSES[ratio]) {
                            throw new Error(`Aspect ratio ${ratio} not supported by the gallery viewer component. The supported ratios are 16:9 and 9:16.`);
                        }
                    }
                };
            } else {
                setAspectRatio(ratio || "16:9"); // Default to 16:9 if null
            }
        }, 100, tag);
    
        scheduler.schedule(() => {
            _checkLoadCompletion();
        }, 200, tag);
    }, [displayingGallery]);
    

    const _checkLoadCompletion = () => {
        scheduler.clearAllWithTag(tag)
        scheduler.interval(() => {
            const ready = utils.didLoadAllImages('.swiper-image')
            if(ready) {
                scheduler.clearAllWithTag(tag)
                hideActivitySpinner(tag)
            }
        }, 300, tag)
    }

    const _close = () => {
        setImages(null)
        setAspectRatio(null)
        hideGallery()
    }

    return (
        <Modal  id={`gallery-modal`}
                visible={Boolean(displayingGallery)}>

            {images && aspectRatio && (
                <ModalWindowTransparent transparent={true} onClose={_close}>
                    <Swiper
                        zoom={true}
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        direction={direction}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Zoom, Pagination]}
                        className={`gallery-swiper ${direction === 'vertical' ? 'gallery-swiper-no-bullets' : ''}`}
                    >
                        {images.map((imgUrl, key) => (
                            <SwiperSlide key={key} className={RATIO_CLASSES[aspectRatio]}>
                                <div className={`swiper-zoom-container`}>
                                    <img className={`swiper-image`} alt={`img-` + key} src={utils.resolvePath(imgUrl)}/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ModalWindowTransparent>
            )}
        </Modal>
    )
}

export default GalleryModal