import type { Access } from 'payload';

export const anyone: Access = () => true;

export const authenticated: Access = ({ req: { user } }) => {
  return Boolean(user);
};

export const admin: Access = ({ req: { user } }) => {
  return Boolean(user && user.role === 'admin');
};
