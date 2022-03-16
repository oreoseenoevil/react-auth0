export interface User {
  name: string;
  picture: string;
  email: string;
}

interface ProfileProps {
  user: any;
}

export const Profile = ({ user }: ProfileProps) => {
  return (
    <div>
      <img src={user.picture} alt="Profile" />
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
    </div>
  );
};
