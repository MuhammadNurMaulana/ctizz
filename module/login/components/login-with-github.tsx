import { signIn } from "@/lib/auth/auth"
import { FaGithub } from "react-icons/fa6"

export default function LoginGithub() {
  return (
    <form
      className="px-4"
      action={async () => {
        "use server"
        await signIn("github", {
          redirectTo: "/",
        })
      }}
    >
      <button type="submit" className="w-full px-4 py-2 grid justify-center bg-neutral-300 hover:bg-neutral-400 rounded">
        <FaGithub size={30} />
      </button>
    </form>
  )
}
