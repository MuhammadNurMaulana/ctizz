import { signIn } from "@/lib/auth/auth"
import { FcGoogle } from "react-icons/fc"

export default function LoginGoogle() {
  return (
    <form
      action={async () => {
        "use server"
        signIn("google", {
          redirectTo: "/",
        })
      }}
      className="w-full px-4"
    >
      <button type="submit" className="w-full flex justify-center hover:bg-neutral-300 py-2 rounded">
        <FcGoogle size={30} />
      </button>
    </form>
  )
}
