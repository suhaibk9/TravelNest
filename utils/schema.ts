import * as z from 'zod';
import { ZodSchema } from 'zod';
//Check if the File is Image
const ValidateFile = () => {
  //1 MB
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = [
    'image/jpeg',
    'image/png',
    'image/jpg',
    'image/gif',
  ];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, 'File size should be less than 1MB')
    .refine((file) => {
      return !file || acceptedFileTypes.includes(file.type);
    }, 'File type should be an image');
};
export const imageSchema = z.object({
  image: ValidateFile(),
});
export const profileSchema = z.object({
  firstName: z //min 2 chars max 20 chars and no number and special characters
    .string()
    .regex(/^[a-zA-Z]+$/, { message: 'First name must contain only letters' })
    .max(20, { message: 'First name must be less than 20 characters' })
    .min(2, { message: 'First name must be more than 2 characters' }),
  lastName: z
    .string()
    .regex(/^[a-zA-Z]+$/, { message: 'Last name must contain only letters' })
    .max(20, { message: 'Last name must be less than 20 characters' })
    .min(2, { message: 'Last name must be more than 2 characters' }),
  userName: z //min 5 chars max 15 chars numbers allowed but no special characters
    .string()
    .regex(/^[a-zA-Z0-9]+$/, {
      message: 'User name must contain only letters and numbers',
    })
    .max(15, { message: 'User name must be less than 15 characters' })
    .min(5, { message: 'User name must be more than 5 characters' }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const error = result.error.errors.map((error) => error.message).join(', ');
    throw new Error(error);
  }
  return result.data;
}


//Property


export const propertySchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'name must be at least 2 characters.',
    })
    .max(100, {
      message: 'name must be less than 100 characters.',
    }),
  tagline: z
    .string()
    .min(2, {
      message: 'tagline must be at least 2 characters.',
    })
    .max(100, {
      message: 'tagline must be less than 100 characters.',
    }),
  price: z.coerce.number().int().min(0, {
    message: 'price must be a positive number.',
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'description must be between 10 and 1000 words.',
    }
  ),
  country: z.string(),
  guests: z.coerce.number().int().min(0, {
    message: 'guest amount must be a positive number.',
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: 'bedrooms amount must be a positive number.',
  }),
  beds: z.coerce.number().int().min(0, {
    message: 'beds amount must be a positive number.',
  }),
  baths: z.coerce.number().int().min(0, {
    message: 'bahts amount must be a positive number.',
  }),
  amenities: z.string(),
});