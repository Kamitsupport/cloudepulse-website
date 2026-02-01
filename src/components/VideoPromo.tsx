import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

const VideoPromo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setIsMuted(false);
        if (videoRef.current) videoRef.current.muted = false;
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0a1628] to-[#0d1e36]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-orange-500/20 text-sm text-blue-300 border border-blue-500/30 mb-4">
            See It In Action
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Watch How CloudePulse Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Take a quick tour of CloudePulse and see how our all-in-one platform
            helps MSPs monitor, protect, and grow their business.
          </p>
        </div>

        {/* Video container */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => isPlaying && setShowControls(false)}
          >
            {/* Video element */}
            <video
              ref={videoRef}
              className="w-full aspect-video bg-black"
              poster="/video/cloudepulse-poster.jpg"
              muted={isMuted}
              playsInline
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/video/cloudepulse-promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play overlay (shown when not playing) */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-all duration-300"
                onClick={handlePlayPause}
              >
                <button
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] flex items-center justify-center shadow-lg shadow-orange-500/30 hover:scale-110 transition-transform duration-300"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                </button>
              </div>
            )}

            {/* Custom controls */}
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePlayPause}
                  className="text-white hover:text-orange-400 transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6" fill="white" />
                  )}
                </button>

                <button
                  onClick={handleMuteToggle}
                  className="text-white hover:text-orange-400 transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6" />
                  ) : (
                    <Volume2 className="w-6 h-6" />
                  )}
                </button>

                <div className="flex-1" />

                <button
                  onClick={handleFullscreen}
                  className="text-white hover:text-orange-400 transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Video duration note */}
          <p className="text-center text-gray-500 text-sm mt-4">
            2:46 • Full product walkthrough with audio narration
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoPromo;
