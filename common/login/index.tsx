import AuthComponents from "@/components/layouts/auth-components"
import LoginWithUser from "./components/login-with-user"
import LoginGoogle from "./components/login-with-google"
import LoginGithub from "./components/login-with-github"

export default function LoginComponents() {
  return (
    <main>
      <AuthComponents
        image="https://img.freepik.com/free-photo/beautiful-smiling-hipster-brunette-woman-model-casual-stylish-summer-sweater-blue-handbag-isolated-white-background-showing-peace-sign-giving-kiss_158538-13131.jpg"
        alt="login image"
      >
        <div className="flex items-center justify-center">
          <div className="w-[80%] py-8">
            <h1 className="text-2xl font-bold">Welcome</h1>
            <p className="text-neutral-500 text-sm font-semibold">please login here</p>
            <LoginWithUser />
            <div className="grid grid-cols-2">
              <LoginGoogle />
              <LoginGithub />
            </div>
          </div>
        </div>
      </AuthComponents>
    </main>
  )
}
