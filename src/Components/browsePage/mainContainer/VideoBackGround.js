import ReactPlayer from 'react-player';
import { YOUTUBE_URL } from '../../../utils/constants';
import { useSelector } from 'react-redux';

const VideoBackGround = () => {
  const trailerId = useSelector(store => store.movies.getTrailer);
  const { isPlaying} = useSelector(store => store.config)

  return (
    <div className="pl-14 bg-black h-[90vh]">
      <ReactPlayer
        className="react-player"
        url={`${YOUTUBE_URL}${trailerId}?si=${trailerId}`}
        width="100%"
        height="100%"
        playing={isPlaying}
        config={{
          youtube: {
            playerVars: {
              quality: 'hd1440p',
            },
          },
        }}
      />
    </div>
  )
}

export default VideoBackGround