import React, { useState, useEffect } from 'react';

interface ContentProps {
    onVideoEnd: React.ReactNode;
    // Diğer bileşenlere geçirilmek istenen özellikler
}

const VideoComponent = (props: ContentProps) => {
    const { onVideoEnd } = props;
    const [isOpen, setIsOpen] = useState(true);
    const [resetKey, setResetKey] = useState(0);

    useEffect(() => {
        if (!isOpen) {
            setResetKey((prevKey) => prevKey + 1);
            enableScroll();
        }
    }, [isOpen]);

    const handleVideoEnd = () => {
        // Video tamamlandığında sadece tekrar oynatın
        // Diğer işlemleri burada ekleyebilirsiniz.
        console.log(onVideoEnd);
    };

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        disableScroll();
        return () => enableScroll();
    }, []);

    return (
        <div>
            {isOpen && (
                <video
                    key={resetKey}
                    controls={false}
                    autoPlay
                    onEnded={handleVideoEnd}
                    loop
                    muted // Sesin kapalı olması için "muted" eklenir
                    style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
                >
                    <source src="src/assets/adsa.mp4" type="video/mp4" />
                </video>
            )}
        </div>
    );
};

export default VideoComponent;
