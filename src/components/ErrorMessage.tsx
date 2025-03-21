
type ErrorMessageProps = { //para que pueda recibir un string un jsElement, convertimos a reactnode
    children: React.ReactNode
}


export default function ErrorMessage({children} : ErrorMessageProps) {
  return (
    <div className="bg-red-50 text-red-600 p-3 uppercase text-sm font-bold text-center">{children}</div>
  )
}
