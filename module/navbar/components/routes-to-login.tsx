import { auth, signIn, signOut } from "@/lib/auth/auth"

export default async function RoutesToLogin() {
  const session = await auth()
  return (
    <>
      {session && session.user ? (
        <form
          action={async () => {
            "use server"

            await signOut({
              redirectTo: "/auth/login",
            })
          }}
        >
          <button type="submit" className="px-6 py-1 rounded-[8px] font-serif text-sm bg-neutral-700 text-white">
            Logout
          </button>
        </form>
      ) : (
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
      )}
    </>
  )
}
