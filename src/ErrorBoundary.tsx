import { Component, ErrorInfo, ReactNode } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { Button } from 'components/Shared';
import { StyledText4 } from 'components/Shared/Texts';

interface Props {
  children?: ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Page>
          <MessageWrapper>
            <StyledText4>예상치 못한 에러가 발생했습니다.</StyledText4>
            <ResetButton
              onClick={() => {
                window.location.reload();
                window.sessionStorage.clear();
              }}
            >
              <StyledText4>처음으로</StyledText4>
            </ResetButton>
          </MessageWrapper>
        </Page>
      );
    }

    return children;
  }
}
export default ErrorBoundary;

const Page = styled.div`
  position: relative;
  height: 100%;
  background-color: ${COLORS.PURPLE};
`;

const MessageWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  opacity: 0.9;
  color: ${COLORS.WHITE};
`;

const ResetButton = styled(Button)`
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.PURPLE};
  box-shadow: 0 2px 4px 0 ${COLORS.BLACK_OPACITY10};
`;
