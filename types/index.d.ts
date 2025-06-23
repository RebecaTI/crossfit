declare type SearchParamProps = {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

declare type Gender = 'Male' | 'Female' | 'Other'

declare interface CreateUserParams {
  name: string
  email: string
  phone: string
}
declare interface User extends CreateUserParams {
  $id: string
}

declare interface RegisterUserParams extends CreateUserParams {
  userId: string
  birthDate: Date
  gender: Gender
  address: string
  occupation: string
  emergencyContactName: string
  emergencyContactNumber: string
  currentMedication: string | undefined
  privacyConsent: boolean
  wight: string | undefined
  height: string | undefined
}
