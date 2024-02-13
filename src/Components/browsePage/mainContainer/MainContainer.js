import { useEffect } from 'react'
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';
import useTrailer from '../../../hooks/useTrailer';


const MainContainer = () => {
  const {
    trailerId,
    trailerDescription,
    fetchNowPlaying,
    handlePlayFullScreen,
    handlePause,
    handleMoreInfo,
    handlePlay,
    handleClose
  } = useTrailer();

  useEffect(() => {
    fetchNowPlaying();
  }, [])


  return (
    <div className="relative">
      <VideoBackGround  trailerId={trailerId} />
      <VideoTitle handlePlayFullScreen={handlePlayFullScreen}  handlePause={handlePause} trailerDescription={trailerDescription} trailerId={trailerId}  handleMoreInfo={handleMoreInfo} handlePlay={handlePlay} handleClose={handleClose} />
    </div>
  )
}

export default MainContainer