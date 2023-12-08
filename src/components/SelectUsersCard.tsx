'use client'
import { Pencil, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { CardContent } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CardUser = {
  name: string,
  avatar: string,
}

export function SelectUserCard({avatar,name}:CardUser){
  const navigation = useRouter()
  return (
    <div className="flex flex-col items-center justify-center  w-full h-screen">
      <header 
        className="text-6xl text-center w-full text-zinc-100 md:-mt-80 "
      >
          Quem está assistindo?
      </header>
      {
        avatar ? 
        (
          <>
        <Button 
          className={`w-48 h-48 p-2 mt-8 items-center justify-center  bg-zinc-600 hover:bg-zinc-500 hover:border-2 hover:border-zinc-100`}
          onClick={() => navigation.push('/dashboard')}
        >
            <Image 
              src={avatar} 
              alt="" width={175} height={175}
            /> 
        </Button>
        <p className="text-zinc-200 text-2xl text-center mt-2 mb-3">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <Link href={'/selecao-usuario/editar-usuario'}>
          <Pencil color="white" size={35} />
        </Link>
        </>
        )
        :
        (
          <>
          <Button 
          className={`flex w-48 h-48 p-2 mt-8 items-center justify-center  bg-zinc-600 hover:bg-zinc-500 hover:border-2 hover:border-zinc-100`}
          onClick={() => navigation.push('/selecao-usuario/novo-usuario')}
        >
            <Plus color="black" size={80}/>
        </Button>
        <p className="text-zinc-200 text-2xl text-center mt-2">Crie seu usuário</p>
        </>
        )
      }
    </div>
  )
}