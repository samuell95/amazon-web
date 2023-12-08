'use client'
import { FormSignIn } from "@/components/form/FormSignIn";
import Image from "next/image";
import Link from "next/link";
import LogoPrim from '../../public/Prime_Video.png'
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function SignIn() {
  const navigation = useRouter()
  return (
   <div className='flex bg-zinc-900 items-center justify-center w-full h-screen'>
    <Card className="flex flex-col md:p-4 p-2 pb-4 items-center justify-center bg-zinc-50 border-8  border-yellow-500">
      <Image alt="Logo da prime video" width={300} height={300} src={LogoPrim}/>
      <CardContent className="flex flex-col border-2  border-zinc-300 px-8 py-7">
        <h1 className="mb-7 text-4xl font-medium">Sign in</h1>
      <FormSignIn/>
    <p className="mt-3 text-sm text-center">
      By continuing, you agree to the Amazon{' '} 
      <Link href={''} className="text-[#3679c2] hover:text-sky-500">
      Conditions of Use and Privancy Notice.
    </Link>
    </p>
    <div className="flex mt-5 items-center justify-center">
    <Checkbox id="terms2" className="mr-2 shadow-none"/>
      <label
        htmlFor="terms2"
        className="text-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Keep me signed in. <Link href={''} className="text-[#3679c2] hover:text-sky-500">Details</Link>
      </label>
      </div>

      <p className="text-center mt-4 underline">New to Amazon?</p>
      <Button className="mt-4" onClick={() => navigation.push('/signUp')}>
        Create your Amazon account
      </Button>
      </CardContent>
    </Card>
   </div>
  )
}
