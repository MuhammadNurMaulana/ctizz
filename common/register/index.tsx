import AuthComponents from "@/components/layouts/auth-components"
import FormRegister from "./components/form-register"

export default function RegisterComponents() {
  return (
    <main>
      <AuthComponents
        image="https://img.freepik.com/free-photo/beautiful-smiling-hipster-brunette-woman-model-casual-stylish-summer-sweater-blue-handbag-isolated-white-background-showing-peace-sign-giving-kiss_158538-13131.jpg"
        alt="login image"
      >
        <div className="flex items-center justify-center">
          <div className="w-[80%] py-8">
            <h1 className="text-2xl font-bold">Create New Account</h1>
            <p className="text-neutral-500 text-sm font-semibold">Please enter details</p>
            <FormRegister />
            <div className="grid grid-cols-2">{/* <LoginGoogle /> */}</div>
          </div>
        </div>
      </AuthComponents>
    </main>
  )
}
