export type User = {
    handle: string
    name: string
    email: string
    password: string
//    description: string
  //  image: string
  //  links: string
}


export type RegisterForm = Pick<User, 'handle' | 'email' | 'name'> & {
    password: string
    password_confirmation: string
}