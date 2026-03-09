import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import ParticulierLayout from "@/layouts/services/Particuliers"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})
const Particulier = ({ admin }: { admin: boolean }) => {
    const canonical = "https://www.central-taxi67.fr/services/particuliers"
    return (
        <PageLayout page="/services/particuliers" admin={admin}>
            <SEO 
                title="Taxi Strasbourg Service pour particuliers – Central Taxi 67" 
                description="Déplacements personnels dans Strasbourg et ses environs en toute sérénité avec notre service de taxi dédié aux particuliers : transferts aéroport et gare, transport événementiel"
                canonical={canonical}
            />
            <ParticulierLayout />
        </PageLayout>
    )
}

export default Particulier