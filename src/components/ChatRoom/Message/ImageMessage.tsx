import { memo } from 'react';
import styled from '@emotion/styled';
import { ImageType } from 'types';
import { CancelIcon } from '../../Icon';
import { Button, Circle, Image } from '../../Shared';
import ProgressBar from './ProgressBar';

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
          <ProgressBar />
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
