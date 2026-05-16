import z from 'zod';

export interface EditUserProps {
  name?: string;
  phone?: string;
  role?: string;
}

export const formSchema = z.object({
  user_name: z
    .string()
    .min(5, 'Username must be at least 5 characters.')
    .max(32, 'Username must be at most 32 characters.'),
  phone: z
    .string()
    .min(11, 'Phone must be at least 10 characters.')
    .max(11, 'Phone must be at most 10 characters.'),
  role: z.string().min(1, 'Role is required'),
});

export type FormValues = z.infer<typeof formSchema>;
