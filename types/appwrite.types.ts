import { Models } from 'node-appwrite'

export interface Client extends Models.Document {
  userId: string
  name: string
  email: string
  phone: string
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
