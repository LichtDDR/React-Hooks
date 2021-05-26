import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import ChatAPI from 'react';

function Hook(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
      function handleStatusChange(status) {
          setIsOnline(status.isOnline);
      }
      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange); 
      return function cleanup() {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
  });

  if (isOnline == null) {
      return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
export default Hook;