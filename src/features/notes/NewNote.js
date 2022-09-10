
import NewNoteForm from './NewNoteForm';

import { useGetUsersQuery } from '../users/usersApiSlice';
import PulseLoder from 'react-spinners/PulseLoader';


const NewNote = () => {
  const {users} = useGetUsersQuery("usersList",{
    selectFromResult:({data}) => ({
      users:data?.ids.map(id => data?.entities[id])
    }),
  })

  if(!users?.length) return <PulseLoder color={'#fff'} />

  const content = <NewNoteForm users={users} />
  return content;
}

export default NewNote