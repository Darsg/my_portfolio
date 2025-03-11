import "../../src/styles/app.scss"
import React, {useEffect, useState} from 'react'
import {useData} from "../providers/DataProvider.jsx"
import Portfolio from "../components/Portfolio.jsx"
import {AnimatedCursor} from "../components/feedbacks/AnimatedCursor"
import ActivitySpinner from "../components/feedbacks/ActivitySpinner.jsx"
import ImageCache from "../components/generic/ImageCache.jsx"
import YoutubeModal from "../components/modals/YoutubeModal.jsx"
import GalleryModal from "../components/modals/GalleryModal.jsx"
import Notifications from "../components/feedbacks/Notifications.jsx"
import ConfirmationWindow from "../components/modals/ConfirmationWindow.jsx"
import {useFeedbacks} from "../providers/FeedbacksProvider.jsx"

function App() {
    const {listImagesForCache} = useData()

    const imageList = listImagesForCache()

    return (
        <div className={`app-wrapper`}>
            <AppFeedbacks/>
            <ImageCache urls={imageList}/>
            <Portfolio/>
        </div>
    )
}

function AppFeedbacks() {
    const {
        listSpinnerActivities,
        isAnimatedCursorEnabled,
        isAnimatedCursorActive,
        isModalOpen,
        displayingNotification,
        killNotification,
        displayingYoutubeVideo,
        hideYoutubeVideo,
        displayingGallery,
        hideGallery,
        pendingConfirmation,
        hideConfirmationDialog
    } = useFeedbacks()


    const spinnerActivities = listSpinnerActivities()
    const animatedCursorEnabled = isAnimatedCursorEnabled()
    const animatedCursorActive = isAnimatedCursorActive()
    const modalOpen = isModalOpen()

    return (
        <>
            {spinnerActivities && (
                <ActivitySpinner activities={spinnerActivities}/>
            )}

            {isAnimatedCursorEnabled() && (
                <AnimatedCursor enabled={animatedCursorEnabled}
                                active={animatedCursorActive}
                                modalOpen={modalOpen}/>
            )}

            {displayingNotification && (
                <Notifications displayingNotification={displayingNotification}
                               killNotification={killNotification}/>
            )}


            <YoutubeModal   displayingYoutubeVideo={displayingYoutubeVideo}
                            hideYoutubeVideo={hideYoutubeVideo}/>



            <GalleryModal   displayingGallery={displayingGallery}
                            hideGallery={hideGallery}/>



            <ConfirmationWindow pendingConfirmation={pendingConfirmation}
                                hideConfirmationDialog={hideConfirmationDialog}/>
        </>
    )
}

export default App
