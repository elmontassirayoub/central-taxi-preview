import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import EuropaParkPageLayout from "@/layouts/taxi/EuropaParkPageLayout"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

const TaxiStrasbourgEuropaPark = ({ admin }: { admin: boolean }) => {
    const canonical = "https://www.central-taxi67.fr/taxi/taxi-strasbourg-europapark"
    return (
        <PageLayout page="/taxi/taxi-strasbourg-europapark" admin={admin}>
            <SEO
                title="Taxi Strasbourg Europa Park : réservez un service Premium"
                description="Profitez d'un transfert direct vers Europa Park depuis Strasbourg. Confort, sécurité et ponctualité garantis. Sièges auto et Wi-Fi disponibles à bord."
                canonical={canonical}
                structuredDataType="TaxiService"
                serviceName="Taxi Strasbourg Europa Park - Central Taxi 67"
                serviceDescription="Transfert taxi direct vers Europa Park depuis Strasbourg. Véhicules adaptés aux familles et groupes. Service premium avec Wi-Fi et sièges auto."
                serviceUrl={canonical}
            />
            <EuropaParkPageLayout />
        </PageLayout>
    )
}

export default TaxiStrasbourgEuropaPark



