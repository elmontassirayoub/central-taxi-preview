import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import AvisLayout from "@/layouts/services/Avis"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

const Avis = ({ admin }: { admin: boolean }) => {
    const canonical = "https://www.central-taxi67.fr/services/avis"
    return (
        <PageLayout page="/services/avis" admin={admin}>
            <SEO 
                title="Avis Central Taxi 67 : Que racontent nos clients ?" 
                description="quels sont les avis Google, pages, jaunes, Tripadvisor… Sur notre service de taxi Strasbourg ? Découvrez les témoignages laissés par les clients de Central Taxi 67."
                canonical={canonical}
            />
            <AvisLayout />
        </PageLayout>
    )
}

export default Avis