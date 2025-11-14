import { LandingNav } from "@/components/navigations";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <LandingNav route={"sign"} />
      <div className="landing-page pt-10 flex justify-center items-center w-full min-h-screen">
        <SignIn />
      </div>
    </>
  );
}
