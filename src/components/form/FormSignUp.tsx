"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { CardContent } from '../ui/card'
import { useForm } from 'react-hook-form'
import  {z}  from 'zod'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'

const formSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  password: z.string()
})

type MainFormData = z.infer<typeof formSchema>

export function FormSignUp() {
  const navigation = useRouter()
  const form = useForm<MainFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password:'',
      name: '',
      phone: '',
    }
  })

  async function onSubmit(value: MainFormData){
    const createUser = await api.post('/create_user', value, {
      data: {
        email: value.email,
        name: value.name,
        password: value.password,
        phone: value.phone
      }
    })

    return createUser
  }
  return (
    <CardContent>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
        control={form.control}
        name='name'
        render={({field}) => (
          <FormItem>
            <FormLabel className='font-bold text-base'>
              Nome e Sobrenome:
            </FormLabel>
            <FormControl>
              <Input placeholder='Nome e Sobrenome' {...field} className='h-8'/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='phone'
        render={({field}) => (
          <FormItem className='mt-4'>
            <FormLabel className='font-bold text-base'>
              Numero de celular:
            </FormLabel>
            <FormControl>
              <Input placeholder='DDD + Número de celular📲' {...field} className='h-8'/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='email'
        render={({field}) => (
          <FormItem className='mt-4'>
            <FormLabel className='font-bold text-base'>
              E-mail
            </FormLabel>
            <FormControl>
              <Input placeholder='Digite seu E-mail 📩' {...field} className='h-8'/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='password'
        render={({field}) => (
          <FormItem className='mt-4'>
            <FormLabel className='font-bold text-base'>
              Crie sua senha:
            </FormLabel>
            <FormControl>
              <Input placeholder='Digite sua senha 🔑' {...field} className='h-8'/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />
      <Button 
        type='submit' 
        className='bg-yellow-500/80 hover:bg-yellow-300 w-full text-zinc-700 h-8 mt-5'
        onClick={() => navigation.push('/selecao-usuario')}
      >
        Criar conta
      </Button>
    </form>
  </Form>
  </CardContent>
  )
}