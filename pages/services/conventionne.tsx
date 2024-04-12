import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import ConventionneLayout from "@/layouts/services/Conventionne"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

const Conventionne = ({ admin }: { admin: boolean }) => {
    return (
        <PageLayout page="/services/conventionne" admin={admin}>
            <SEO title="Taxi conventionné  à Schiltigheim – Central Taxi 67" description=": Avez-vous besoin d’un taxi conventionné ou d’un VSL à Schiltigheim ? Profitez de nos services professionnels agréés par la CPAM pour voyager sereinement." />
            <ConventionneLayout />
        </PageLayout>
    )
}

export default Conventionne