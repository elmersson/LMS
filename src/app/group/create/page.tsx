import { onAuthenticatedUser } from "@/actions/auth"

const GroupCreatePage = async ({
    searchParams,
}: {
    searchParams: { [affiliate: string]: string }
}) => {
    const user = await onAuthenticatedUser()

    if (!user || !user.id) {
        console.log("user", user)
        // redirect("/sign-in")
    }

    return (
        <>
            <div className="px-7 flex flex-col">
                <h5 className="font-bold text-base text-themeTextWhite">Hi</h5>
            </div>
        </>
    )
}
export default GroupCreatePage
