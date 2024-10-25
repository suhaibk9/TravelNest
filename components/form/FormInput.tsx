import { Label } from '../ui/label';
import { Input } from '../ui/input';
type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};
function FormInput(props: FormInputProps) {
  const { name, type, label, defaultValue, placeholder } = props;
  return (
    <div className="mb-2">
      <Label className='capitalize' htmlFor={name}>{label || name}</Label>
      <Input
        type={type || 'text'}
        id={name}
        name={name}
        defaultValue={defaultValue || ''}
        placeholder={placeholder ||''}
        className="w-full"
        required    
      />
    </div>
  );
}
export default FormInput;
