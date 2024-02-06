import { useEffect } from 'react'
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';
import { NOWPLAYING_URL, TMDB_OPTIONS } from '../../../utils/constants';

const MainContainer = () => {

  const fetchNowPlaying = async () => {
    try {
      const response = await fetch(NOWPLAYING_URL, TMDB_OPTIONS);
      const data = await response.json();
      console.log(data.results);
    } catch (error) {
      console.log(error)
    }


  }
  useEffect(() => {
    fetchNowPlaying();
  }, [])

  return (
    <div>
      <VideoBackGround />
      <VideoTitle />
    </div>
  )
}

export default MainContainer