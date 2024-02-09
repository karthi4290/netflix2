import { useEffect } from 'react'
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';
import useTrailer from '../../../hooks/useTrailer';


const MainContainer = () => {
  const {
    isPlaying,
    trailerId,
    trailerDescription,
    fetchNowPlaying,
    handlePlayFullScreen,
    handlePause
  } = useTrailer();

  useEffect(() => {
    fetchNowPlaying();
  }, [])


  return (
    <div className="relative">
      <VideoBackGround isPlaying={isPlaying} trailerId={trailerId} />
      <VideoTitle handlePlayFullScreen={handlePlayFullScreen} isPlaying={isPlaying} handlePause={handlePause} trailerDescription={trailerDescription} />
    </div>
  )
}

export default MainContainer