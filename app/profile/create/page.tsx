import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Buttons';
import { currentUser } from '@clerk/nextjs/server';
import { createProfileAction } from '@/utils/actions';
import { redirect } from 'next/navigation';

async function CreateProfile() {
  const user = await currentUser();
  if (user?.privateMetadata?.hasProfile) {
    redirect('/');
  }
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <FormContainer action={createProfileAction}>
          <div className="grid gap-4 md:grid-cols-2 mt-4 ">
            <FormInput
              name="firstName"
              type="text"
              label="First Name"
              placeholder="Please enter your first name"
            />
            <FormInput
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Please enter your last name"
            />
            <FormInput
              name="userName"
              type="text"
              label="User Name"
              placeholder="Please enter your user name"
            />
          </div>
          <SubmitButton text="Create Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProfile;

//
