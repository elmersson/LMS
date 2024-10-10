import { onAuthenticatedUser } from "@/actions/auth"

import { redirect } from "next/navigation"

type Props = {
    children: React.ReactNode
}

const AuthLayout = async ({ children }: Props) => {
    const user = await onAuthenticatedUser()

    if (user.status === 200) redirect("/callback/sign-in")

    return (
        <div className="container h-screen flex justify-center items-center">
            <div className="flex flex-col w-full items-center py-24">
                <h2 className="text-4xl font-bold text-themeTextWhite">
                    Competence Group.
                </h2>

                {children}
            </div>
        </div>
    )
}

export default AuthLayout
