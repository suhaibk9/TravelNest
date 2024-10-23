import Link from 'next/link';
import { Button } from '../ui/button';
import { MdHotel } from 'react-icons/md';


function Logo() {
  return (
    <Button className="icon" asChild>
      <Link href={'/'}>
        <MdHotel className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
