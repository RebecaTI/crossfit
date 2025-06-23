"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import CustomFormField from "@/components/ui/CustomFormField"
import SubmitButton from "@/components/SubmitButton"
import React from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/client.actions"

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

const ClientsForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    }
  })

  async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true)
    console.log("Submitting form with data:", { name, email, phone })

    try {
      const userData = { name, email, phone }

      const user = await createUser(userData);

      if (user) router.push(`/clients/${user.$id}/register`)
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-between p-8 pt-12 sm:pt-23 lg:pt-30 text-white">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-md w-full flex flex-col gap-4 z-10">

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Nome Completo"
            placeholder="Thiago Lindo"
            iconSrc="/assets/icons/user.svg"
            iconAlt="User Icon"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="exemploemail@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Telefone"
            placeholder="(12) 1 2345-6789"
            iconSrc="/assets/icons/phone.svg"
            iconAlt="email"
          />

          <SubmitButton isLoading={isLoading} className="w-full hover:bg-neutral-500 hover:text-white ease-in cursor-pointer active:bg-neutral-600 active:ease-out"> Subscribe </SubmitButton>

        </form>
      </Form>

    </div>
  )
}

export default ClientsForm

// 16:22 a parte da senha