import React, { useState, useEffect } from 'react';

const VideoComponent = ({ onVideoEnd }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [resetKey, setResetKey] = useState(0);

    useEffect(() => {
        if (!isOpen) {
            setResetKey((prevKey) => prevKey + 1);
            enableScroll(); // Kaydırmayı yeniden etkinleştir
        }
    }, [isOpen]);

    const handleVideoEnd = () => {
        setIsOpen(false);
        onVideoEnd(); // Video bittiğinde yapılacak işlemler
    };

    const disableScroll = () => {
        document.body.style.overflow = 'hidden'; // Kaydırmayı devre dışı bırak
    };

    const enableScroll = () => {
        document.body.style.overflow = 'auto'; // Kaydırmayı etkinleştir
    };

    useEffect(() => {
        disableScroll(); // İlk renderda kaydırmayı devre dışı bırak
        return () => enableScroll(); // Komponent temizlenirken kaydırmayı etkinleştir
    }, []);

    return (
        <div>
            {isOpen && (
                <video
                    key={resetKey}
                    controls={false}
                    autoPlay
                    onEnded={handleVideoEnd}

                    style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
                >
                    <source src="src/assets/adsao.mp4" type="video/mp4" />
                </video>
            )}
        </div>
    );
};

export default VideoComponent;
