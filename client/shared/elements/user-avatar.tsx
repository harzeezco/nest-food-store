import { useUser } from 'client/store/use-user';
import Image from 'next/image';
import User from './user';

function UserAvatar() {
  const user = useUser((state) => state.user);

  return (
    <div className='flex items-center gap-3 text-base font-medium text-gray-600'>
      <User>
        <Image
          alt={`Avatar of ${user?.name}`}
          className='block aspect-square size-10 rounded-full border-2 border-gray-100 object-cover'
          height={30}
          src={user?.photo || '/images/default-user.jpg'}
          width={30}
        />
      </User>
      <span>{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
