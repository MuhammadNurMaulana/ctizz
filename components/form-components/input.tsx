interface PropsInput {
  type: string
  name: string
  placeholder: string
}

export default function Input({ type, name, placeholder }: PropsInput) {
  return <input type={type} name={name} id={name} placeholder={placeholder} className="bg-transparent p-2 text-sm border border-neutral-700 rounded placeholder:text-neutral-400 text-neutral-600" />
}
