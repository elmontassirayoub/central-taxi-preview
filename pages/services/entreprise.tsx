import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import EntrepriseLayout from "@/layouts/services/Entreprise"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

const Entreprise = ({ admin }: { admin: boolean }) => {
    return (
        <PageLayout page="/services/entreprise" admin={admin}>
            <SEO title="Taxi Strasbourg entreprises et professionnels – Central Taxi 67" description="Services de taxi premium pour les professionnels à Strasbourg. Réservez votre course, vos transferts aéroport et gare, déplacements événementiels, transport VIP, et plus. " />
            <EntrepriseLayout />
        </PageLayout>
    )
}

export default Entreprise