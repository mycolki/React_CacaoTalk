import styled from '@emotion/styled';
import { ImageType } from 'types';

import Button from './Button';
import Circle from './Circle';
import { DeleteIcon } from './Icon';
import Image from './Image';
import ProgressBar from './ProgressBar';

interface ImageMessageProps {
  image?: ImageType;
  loading?: boolean;
  className?: string;
}

function ImageMessage({ loading, image, className }: ImageMessageProps) {
  if (!image) {
    return null;
  }

  return (
    <Container className={className}>
      <Image src={image.imageUrl} alt={image.description} size={200} borderRadius="10px" />
      {loading && (
        <>
          <CancelButton>
            <Circle size="40px" padding="10px" bgColor="BLACK">
              <DeleteIcon />
            </Circle>
          </CancelButton>
          <ProgressBar />
        </>
      )}
    </Container>
  );
}

export default ImageMessage;

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
