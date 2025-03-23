export type User = {
    handle: string
    name: string
    email: string
    password: string
    _id: string
    description: string
    image: string
  //  links: string
}

//tomamos los datos que queremos para el formulario 
export type RegisterForm = Pick<User, 'handle' | 'email' | 'name'> & {
    password: string
    password_confirmation: string
}


export type LoginForm = Pick<User, 'email' > & {
  password: string
}

export type ProfileForm = Pick<User, 'handle' | 'description'>