import { useEffect } from 'react'
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';
import useTrailer from '../../../hooks/useTrailer';


const MainContainer = () => {
  const {
    handleFetchNowPlaying,
    handlePlayFullScreen,
    handlePause,
    handleMoreInfo,
    handlePlay,
    handleClose
  } = useTrailer();

  useEffect(() => {
    handleFetchNowPlaying();
  }, [])


  return (
    <div className="relative">
      <VideoBackGround />
      <VideoTitle handlePlayFullScreen={handlePlayFullScreen} handlePause={handlePause} handleMoreInfo={handleMoreInfo} handlePlay={handlePlay} handleClose={handleClose} />
    </div>
  )
}

export default MainContainer