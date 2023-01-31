import { useEffect } from 'react';
import { Global as EmotionGlobal, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

function Global() {
  useEffect(() => {
    const setVh = () => {
      window.document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <EmotionGlobal
      styles={css`
        ${emotionReset}
        html {
          --app-height: 100%;
          --app-width: 375px;
          --bottom-message-form: 86px;
          --header: 44px;
        }

        * {
          box-sizing: border-box;
        }

        @font-face {
          font-family: AppleSDGothicNeo;
          src: local(AppleSDGothicNeoB), url(./font/AppleSDGothicNeoB.ttf) format('truetype');
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
        }
        @font-face {
          font-family: AppleSDGothicNeo;
          src: local(AppleSDGothicNeoSB), url(./font/AppleSDGothicNeoSB.ttf) format('truetype');
          font-weight: 600;
          font-style: normal;
          font-stretch: normal;
        }
        @font-face {
          font-family: AppleSDGothicNeo;
          src: local(AppleSDGothicNeoM), url(./font/AppleSDGothicNeoM.ttf) format('truetype');
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
        }

        body {
          height: calc(var(--app-height, 100vh));
          font-family: AppleSDGothicNeo;
        }
      `}
    />
  );
}

export default Global;
