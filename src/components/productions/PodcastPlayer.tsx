import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, SkipBack } from "lucide-react"; // <-- added SkipBack

interface PodcastPlayerProps {
  title: string;
  src: string;
  startTime?: number; // in seconds
  endTime?: number; // in seconds
}

export default function PodcastPlayer({
  title,
  src,
  startTime = 0,
  endTime = 60,
}: PodcastPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = endTime - startTime;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial position to start time
    audio.currentTime = startTime;

    const handleTimeUpdate = () => {
      const adjustedTime = audio.currentTime - startTime;
      setCurrentTime(adjustedTime);

      // Stop when reaching end time
      if (audio.currentTime >= endTime) {
        audio.pause();
        audio.currentTime = startTime;
        setIsPlaying(false);
        setCurrentTime(0);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, [startTime, endTime]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Ensure we start from start time when playing
      audioRef.current.currentTime = startTime;
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // New: function to go back 10 seconds
  const handleBack = () => {
    if (!audioRef.current) return;
    let newTime = audioRef.current.currentTime - 10;
    if (newTime < startTime) newTime = startTime;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime - startTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="w-[300px] flex-shrink-0 hover:shadow-lg transition-shadow bg-white border-2 border-black">
      <CardContent className="p-6 space-y-4">
        <h3 className="font-medium text-lg line-clamp-2">{title}</h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleBack}
              className="hover:bg-violet-100 transition-colors"
            >
              <SkipBack className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={togglePlay}
              className="hover:bg-violet-100 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>

          <span className="text-sm text-gray-500">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <audio ref={audioRef} src={src} />

        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-violet-600 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
