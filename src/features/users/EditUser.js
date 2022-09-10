import { useParams } from 'react-router-dom';
import EditUserForm from './EditUserForm';

import { useGetUsersQuery } from './usersApiSlice';
import PulseLoder from 'react-spinners/PulseLoader';

const EditUser = () => {
  const { id } = useParams();
  const { user } = useGetUsersQuery('usersList', {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  });
  if (!user) return <PulseLoder color={'#FFF'} />;
  
  const content = <EditUserForm user={user} />;
  return content;
};

export default EditUser;
