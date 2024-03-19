import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

function ResizeBackground() {
    useEffect(() => {
        const resizeBackground = () => {
            $('.bgd').height(window.innerHeight);
        };

        // Call resizeBackground on window resize
        $(window).on('resize', resizeBackground);

        // Call resizeBackground initially
        resizeBackground();

        // Clean up the event listener when the component unmounts
        return () => {
            $(window).off('resize', resizeBackground);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return null; // This component doesn't render anything
}

export default ResizeBackground;
