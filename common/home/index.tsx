import { auth, signIn, signOut } from "@/lib/auth/auth"
import { Navbar } from "../navbar"

export default async function HomeComponents() {
  const session = await auth()
  console.log(session?.user)
  return (
    <div>
      <Navbar />
      {session && session.user ? (
        <div>
          <h1>{JSON.stringify(session.user)}</h1>
          <form
            action={async () => {
              "use server"
              await signOut({
                redirectTo: "/auth/login",
              })
            }}
          >
            <button type="submit">sign-out</button>
          </form>
        </div>
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
