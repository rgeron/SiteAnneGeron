import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

interface PodcastPlayerProps {
  title: string;
  src: string;
}

export default function PodcastPlayer({ title, src }: PodcastPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial position to 1 minute
    audio.currentTime = 60;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime - 60); // Adjust display time to show 0-60
      // Stop after 2 minutes (1 minute of actual content)
      if (audio.currentTime >= 120) {
        audio.pause();
        audio.currentTime = 60; // Reset to 1-minute mark
        setIsPlaying(false);
        setCurrentTime(0);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Ensure we start from 1-minute mark when playing
      audioRef.current.currentTime = 60;
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="w-[300px] flex-shrink-0 hover:shadow-lg transition-shadow bg-gradient-to-br from-violet-50 to-blue-50 border-violet-100">
      <CardContent className="p-6 space-y-4">
        <h3 className="font-medium text-lg line-clamp-2">{title}</h3>

        <div className="flex items-center justify-between">
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

          <span className="text-sm text-gray-500">
            {formatTime(currentTime)} / 1:00
          </span>
        </div>

        <audio ref={audioRef} src={src} />

        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-violet-600 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${(currentTime / 60) * 100}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
