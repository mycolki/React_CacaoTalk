import { Route, Routes as ReactRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import ChatRoomPage from './ChatRoomPage';
import ChatRoomListPage from './ChatRoomListPage';

function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/list" element={<ChatRoomListPage />} />
        <Route path="/room/:roomId" element={<ChatRoomPage />} />
        <Route path="*" element={<Navigate replace to="/list" />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}

export default Routes;
