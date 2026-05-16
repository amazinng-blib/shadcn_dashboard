'use client';

import React from 'react';
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { Field, FieldError, FieldLabel } from './ui/field';
import { formSchema, FormValues } from './types';

const EditUser = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: '',
      phone: '',
      role: '',
    },
  });

  const userDetails = form.watch();

  console.log('details', userDetails);

  function onSubmit(data: FormValues) {
    toast.success('User updated successfully!', {
      description: JSON.stringify(data, null, 2),
    });
    form.reset();
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit User</SheetTitle>
        <SheetDescription>Update the user's details below.</SheetDescription>
      </SheetHeader>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4 pt-6"
        id="edit-user-form"
      >
        <Controller
          name="user_name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid || undefined}>
              <FieldLabel htmlFor="user_name">Name</FieldLabel>

              <Input
                id="user_name"
                {...field}
                className="w-full p-6 text-white"
                placeholder="Full Name..."
                aria-invalid={fieldState.invalid || undefined}
              />

              {fieldState.invalid && (
                <FieldError>{fieldState.error?.message}</FieldError>
              )}
            </Field>
          )}
        />

        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid || undefined}>
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>

              <Input
                id="phone"
                {...field}
                className="w-full p-6 text-white"
                placeholder="Enter Phone Number..."
                aria-invalid={fieldState.invalid || undefined}
              />

              {fieldState.invalid && (
                <FieldError>{fieldState.error?.message}</FieldError>
              )}
            </Field>
          )}
        />
        <Controller
          name="role"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid || undefined}>
              <FieldLabel htmlFor="role">Role</FieldLabel>

              <Input
                id="role"
                {...field}
                className="w-full p-6 text-white"
                placeholder="Enter Role..."
                aria-invalid={fieldState.invalid || undefined}
              />

              {fieldState.invalid && (
                <FieldError>{fieldState.error?.message}</FieldError>
              )}
            </Field>
          )}
        />
        <Button type="submit" className="mt-6 w-full">
          Submit
        </Button>
      </form>
    </SheetContent>
  );
};

export default EditUser;
