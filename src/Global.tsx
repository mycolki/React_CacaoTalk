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
        :root {
          --app-height: 100%;
        }
        * {
          box-sizing: border-box;
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
