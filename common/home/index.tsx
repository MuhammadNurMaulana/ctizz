import { auth, signIn, signOut } from "@/lib/auth/auth"
import { Navbar } from "../navbar"

export default async function HomeComponents() {
  const session = await auth()
  console.log(session)
  return (
    <div>
      <Navbar />
      {session && session.user ? (
        <form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <button type="submit">sign-out</button>
        </form>
      ) : (
        <form
          action={async () => {
            "use server"
            await signIn("google")
          }}
        >
          <button type="submit">sign-in</button>
        </form>
      )}
      <h1>hello</h1>
    </div>
  )
}
