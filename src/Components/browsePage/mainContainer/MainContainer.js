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
    handlePause,
    isMoreInfo,
    handleMoreInfo,
    isvideoPlay,
    handlePlay,
    handleClose
  } = useTrailer();

  useEffect(() => {
    fetchNowPlaying();
  }, [])


  return (
    <div className="relative">
      <VideoBackGround isPlaying={isPlaying} trailerId={trailerId} />
      <VideoTitle handlePlayFullScreen={handlePlayFullScreen} isPlaying={isPlaying} handlePause={handlePause} trailerDescription={trailerDescription} trailerId={trailerId} isMoreInfo={isMoreInfo} handleMoreInfo={handleMoreInfo} isvideoPlay={isvideoPlay} handlePlay={handlePlay} handleClose={handleClose} />
    </div>
  )
}

export default MainContainer