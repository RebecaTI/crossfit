"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().max(30),
  emailAddress: z.string().email(),
  //   password: z.string().min(3),
  //   passwordConfirm: z.string()
  // }).refine((data) => {
  //   return data.password === data.passwordConfirm
  // }, {
  //   message: "Senha não corresponde",
  //   path: ["passwordConfirm"]
})

const ClientsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      // password: "",
      // passwordConfirm: ""
    }
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={(({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-white">Nome:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ana Silva"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            })}
          />

          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email:</FormLabel>
                <FormControl>
                  <Input placeholder="exemplo@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
            }
          />

          <Button type="submit" className="w-full hover:bg-neutral-800 ease-in cursor-pointer active:bg-neutral-600 active:ease-out">
            Submit
          </Button>
        </form>
      </Form>

    </div>
  )
}

export default ClientsForm

// 16:22 a parte da senha