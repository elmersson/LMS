import BackdropGradient from "@/components/global/backdrop-gradient"
import GlassCard from "@/components/global/glass-card"
import GradientText from "@/components/global/gradient-text"

type Props = {
    children: React.ReactNode
}

const CreateGroupLayout = ({ children }: Props) => {
    return (
        <div className="container h-screen grid grid-cols-1 lg:grid-cols-2 content-center">
            <div className="flex items-center">
                <BackdropGradient className="w-8/12 h-2/6 opacity-50">
                    <h5 className="text-2xl font-bold text-themeTextWhite">
                        Grouple.
                    </h5>
                    <GradientText
                        element="H2"
                        className="text-4xl font-semibold py-1"
                    >
                        Create Your Group
                    </GradientText>
                </BackdropGradient>
            </div>
            <div>
                <BackdropGradient
                    className="w-6/12 h-3/6 opacity-40"
                    container="lg:items-center"
                >
                    <GlassCard className="xs:w-full lg:w-10/12 xl:w-8/12 mt-16 py-7">
                        {children}
                    </GlassCard>
                </BackdropGradient>
            </div>
        </div>
    )
}

export default CreateGroupLayout
