import { memo } from 'react';
import styled from '@emotion/styled';
import { ImageType } from 'types';
import COLORS from 'style/palette';
import { progressBarLoader } from 'style/animation';
import { CancelIcon } from '../../Icon';
import { Button, Circle, Image } from '../../Shared';

interface ImageMessageProps {
  image: ImageType;
  loading?: boolean;
}

function ImageMessage({ loading, image: { imageUrl, description } }: ImageMessageProps) {
  return (
    <Container>
      <Image src={imageUrl} alt={description} size={200} borderRadius="10px" />

      {loading && (
        <>
          <CancelButton>
            <Circle size="40px" padding="10px" bgColor="BLACK">
              <CancelIcon />
            </Circle>
          </CancelButton>

          <ProgressBar>
            <Bar>
              <Progress />
            </Bar>
          </ProgressBar>
        </>
      )}
    </Container>
  );
}

export default memo(ImageMessage);

const Container = styled.div`
  position: relative;
`;

const CancelButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: -12px;
  width: 100%;
  height: 6px;
  overflow: hidden;
  border-radius: 6px;
`;
const Bar = styled.div`
  background-color: ${COLORS.PALE_LILAC};
`;
const Progress = styled.div`
  width: 0;
  padding: 5px;
  background-color: ${COLORS.PURPLE};
  animation-name: ${progressBarLoader};
  animation-duration: 3s;
  animation-timing-function: ease;
`;
