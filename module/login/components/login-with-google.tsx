import { signIn } from "@/lib/auth/auth"
import { FcGoogle } from "react-icons/fc"

export default function LoginGoogle() {
  return (
    <form
      className="px-4"
      action={async () => {
        "use server"
        await signIn("google", {
          redirectTo: "/",
        })
      }}
    >
      <button type="submit" className="w-full px-4 py-2 grid justify-center bg-neutral-300 hover:bg-neutral-400 rounded">
        <FcGoogle size={30} />
      </button>
    </form>
  )
}
