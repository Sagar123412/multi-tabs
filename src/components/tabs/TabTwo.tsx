import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchUsers } from '../../redux/slices/usersSlice';

const TabTwo = ({ navigateTo }: { navigateTo: (index: number) => void }) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state: any) => state.users.users);
  const status = useAppSelector((state: any) => state.users.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => navigateTo(2)}>Go to Tab 3</button>
      <h3>Users from API:</h3>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>{user.first_name} {user.last_name}</li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>Failed to load users.</p>}
    </div>
  );
};

export default TabTwo;
