"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import  {z}  from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { CardContent } from '../ui/card'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'

const formSchema = z.object({
  email: z.string({required_error: 'Digite seu E-mail'}).email({message:"E-mail invalido"}),
  password: z.string({required_error: 'Digite sua senha'}).min(7,{message: 'Sua senha tem que ter no minimo de 7 caracteres'})
})

type MainFormData = z.infer<typeof formSchema>

export function FormSignIn() {
  const navigation = useRouter()
  const form = useForm<MainFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password:''
    }
  })

  async function onSubmit(values: MainFormData){
    const getUser = await api.post('/login', values, {
      data: {
        email: values.email,
        password: values.password
      }
    })

    navigation.push('/selecao-usuario')
    return getUser
  }

  return (
    <CardContent>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
        control={form.control}
        name='email'
        render={({field}) => (
          <FormItem>
            <FormLabel className='font-bold text-base -mb-1'>
              Email or mobile phone number:
            </FormLabel>
            <FormControl>
              <Input placeholder='E-mail 📩 / Phone📱' {...field} className='h-8'/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='password'
        render={({field}) => (
          <FormItem className='mt-5 '>
            <FormLabel className='font-bold text-base'>
              Password:
            </FormLabel>
            <FormControl>
              <Input placeholder='Password 🔑' {...field} className='h-8'/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />
      <Button 
        type='submit' 
        className='bg-yellow-500/80 hover:bg-yellow-300 w-full text-zinc-700 h-8 mt-5'
      >
        Sign In
      </Button>
    </form>
  </Form>
  </CardContent>
  )
}