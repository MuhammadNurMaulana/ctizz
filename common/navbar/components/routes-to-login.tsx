import { signIn } from "@/lib/auth/auth"

export default function RoutesToLogin() {
  return (
    <form
      action={async () => {
        "use server"

        await signIn()
      }}
    >
      <button type="submit" className="px-6 py-1 rounded-[8px] font-serif text-sm bg-neutral-700 text-white">
        Login
      </button>
    </form>
  )
}
