import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const VideoContainer = styled.div`
  margin-bottom: 20px;
`;

const VideoWrapper = styled.div`
  max-width: 695px;
  padding: 0 10px;
  margin: 0 auto;
  aspect-ratio: 1.5;
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const VideoEl = ({ data }) => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }, 1000);
  }, []);
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
    },
  };

  return (
    <VideoContainer>
      <VideoWrapper ref={videoRef}>
        <YouTube videoId={data.youTubeId} opts={opts} />
      </VideoWrapper>
    </VideoContainer>
  );
};

export default VideoEl;
