import React from 'react';
import { User } from '../../utilities/types/User';

type userProps = {
  user: User;
};

export const UserInfo: React.FC<userProps> = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user?.email}`}>
      {user?.name}
    </a>
  );
};
