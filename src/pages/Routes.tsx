import { Route, Routes as ReactRoutes, BrowserRouter, Navigate } from 'react-router-dom';

import ChatRoomPage from './ChatRoomPage';
import ChatListPage from './ChatListPage';

function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/list" element={<ChatListPage />} />
        <Route path="/room/:roomId" element={<ChatRoomPage />} />
        <Route path="*" element={<Navigate replace to="/list" />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}

export default Routes;
