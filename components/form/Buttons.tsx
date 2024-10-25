'use client';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};
type btnSize = 'default' | 'sm' | 'lg';
export function SubmitButton({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitButtonProps) {
  //You can extract pending, error, and success from useFormStatus hook

  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
/*To use it in a Form component, you can import it like this:
import { SubmitButton } from '@/components/form/SubmitButton';
<SubmitButton text="Create Profile" className="mt-4" />

*/
