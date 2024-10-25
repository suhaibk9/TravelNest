import { LuUser2 } from 'react-icons/lu';
import { fetchProfileImage } from '@/utils/actions';
async function UserIcon() {
  const ProfileImage = await fetchProfileImage();
  if (ProfileImage)
    return (
      <img
        src={ProfileImage}
        alt="profile"
        className="w-6 h-6 bg-primary rounded-full text-white"
      />
    );
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
