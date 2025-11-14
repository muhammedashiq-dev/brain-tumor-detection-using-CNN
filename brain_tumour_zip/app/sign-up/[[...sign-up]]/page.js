import { SignUp } from '@clerk/nextjs'
import { LandingNav } from "@/components/navigations";


export default function SignUpPage() {
  return (
    <>
    <LandingNav route={"sign"} />
      <div className='landing-page pt-10 flex justify-center items-center w-full min-h-screen'>
        <SignUp />
      </div>
    </>
  )
}