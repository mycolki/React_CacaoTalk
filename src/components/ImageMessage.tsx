import styled from '@emotion/styled';
import { ImageType } from 'types';

import Button from './Button';
import Circle from './Circle';
import { DeleteIcon } from './Icon';
import Image from './Image';

interface ImageMessageProps {
  image?: ImageType;
  loading?: boolean;
  className?: string;
}

function ImageMessage({ loading, image, className }: ImageMessageProps) {
  return (
    <Container className={className}>
      <Image src={image?.imageUrl ?? ''} alt={image?.description ?? ''} size={150} borderRadius="10px" />
      {loading && (
        <DeleteButton>
          <Circle size="40px" padding="10px" bgColor="BLACK">
            <DeleteIcon />
          </Circle>
        </DeleteButton>
      )}
    </Container>
  );
}

export default ImageMessage;

const Container = styled.div`
  position: relative;
`;

const DeleteButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
`;
