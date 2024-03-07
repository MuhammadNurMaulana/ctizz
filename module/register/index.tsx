import AuthComponents from "@/components/layouts/auth-components"
import FormRegister from "./components/form-register"

export default function RegisterComponents() {
  return (
    <main>
      <AuthComponents image="https://img.freepik.com/free-photo/fashion-girl-dress-up-with-hand-gesture-pink_1150-15371.jpg" alt="register image">
        <div className="flex items-center justify-center">
          <div className="w-[80%] py-8">
            <h1 className="text-2xl font-bold">Create New Account</h1>
            <p className="text-neutral-500 text-sm font-semibold">Please enter details</p>
            <FormRegister />
          </div>
        </div>
      </AuthComponents>
    </main>
  )
}
