import { useEffect } from 'react'
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';
import useTrailer from '../../../hooks/useTrailer';


const MainContainer = () => {
  const {
    fetchNowPlaying,
  } = useTrailer();

  useEffect(() => {
    fetchNowPlaying();
  }, [])


  return (
    <div className="relative">
      <VideoBackGround />
      <VideoTitle />
    </div>
  )
}

export default MainContainer