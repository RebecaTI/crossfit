"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import CustomFormField from "@/components/CustomFormField"

export enum FormFieldType {
  INPUT = 'input',
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const clientsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="bg-[#131619]">
          <div className="flex flex-col justify-center items-center relative  w-full">
            <div className="mt-30">
              <div className="relative flex flex-col justify-center items-center  text-gray-300">
                <h3 className="font-yantramanav absolute top-[-110] stroke-text font-extrabold text-[140px] z-1">GO!</h3>
                <div className="flex">
                  <Image
                    src="/plus.png"
                    alt="plus sign"
                    width={20}
                    height={20}
                    className=''
                  />
                  <h2 className="text-4xl font-bold z-10 uppercase ">start here </h2>
                </div>
                <p className="w-[400] pt-4 tracking-wider font-light text-center">fill the form below to start your journey</p>
              </div>
            </div>
          </div>
        </section>

        {/* <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Nome Completo"
          placeholder="Maria da Silva"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        /> */}

        {/* continuar essa parte acima */}

        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  )
}

export default clientsForm
