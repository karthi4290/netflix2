import { useSelector } from 'react-redux';
import VideoPlayer from '../../../utils/reactPlayer';

const VideoBackGround = () => {
  const trailerId = useSelector(store => store.movies.getTrailer);
  const { isPlaying } = useSelector(store => store.config);

  return (
    <div className="pl-14 bg-black h-[90vh]">
      <VideoPlayer trailerId={trailerId} isPlaying={isPlaying} height={"100%"} />
    </div>
  )
}

export default VideoBackGround