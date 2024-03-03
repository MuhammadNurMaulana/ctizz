export default function Label({ name, label }: { name: string; label: string }) {
  return (
    <label htmlFor={name} className="font-semibold">
      {label}
    </label>
  )
}
