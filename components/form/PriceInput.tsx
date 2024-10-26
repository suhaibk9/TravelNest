import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Prisma } from '@prisma/client';
const name = Prisma.PropertyScalarFieldEnum.price;
type PriceInputProps = {
  defaultValue?: number;
};
const PriceInput = (props: PriceInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price
      </Label>
      <Input
        id={name}
        name={name}
        type="number"
        required
        min={0}
        defaultValue={props.defaultValue || 0}
      />
    </div>
  );
};
export default PriceInput;
