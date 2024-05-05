import ReactPlayer from 'react-player';
import { YOUTUBE_URL } from './constants';

const VideoPlayer = ({ trailerId, playing, height }) => {
    return (
        <ReactPlayer
            className='react-player'
            url={`${YOUTUBE_URL}${trailerId}?si=${trailerId}`}
            width="100%"
            height={height}
            playing={playing}
            config={{
                youtube: {
                    playerVars: {
                        quality: 'hd1440p',
                    },
                },
            }}
        />
    )
}

export default VideoPlayer;
