import { onAuthenticatedUser } from "@/actions/auth"
import { redirect } from "next/navigation"

const GroupCreatePage = async ({
    searchParams,
}: {
    searchParams: { [affiliate: string]: string }
}) => {
    const user = await onAuthenticatedUser()

    if (!user || !user.id) redirect("/sign-in")

    return (
        <>
            <div className="px-7 flex flex-col">
                <h5 className="font-bold text-base text-themeTextWhite">
                    Payment Method
                </h5>{" "}
            </div>
        </>
    )
}
export default GroupCreatePage
