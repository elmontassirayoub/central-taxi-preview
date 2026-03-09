import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import CircuitPageLayout from "@/layouts/taxi/CircuitPageLayout"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

const TaxiCircuitAlsace = ({ admin }: { admin: boolean }) => {
    const canonical = "https://www.central-taxi67.fr/taxi/taxi-circuit-touristique-alsace"
    return (
        <PageLayout page="/taxi/taxi-circuit-touristique-alsace" admin={admin}>
            <SEO 
                title="Taxi Circuit Touristique Alsace | Central Taxi 67" 
                description="Découvrez l'Alsace avec un circuit touristique en taxi : Route des Vins, villages pittoresques, patrimoine. Itinéraires sur-mesure." 
                canonical={canonical}
                structuredDataType="TaxiService"
                serviceName="Taxi Circuit Touristique Alsace - Central Taxi 67"
                serviceDescription="Circuits touristiques en taxi en Alsace : Route des Vins, châteaux médiévaux, villages pittoresques. Itinéraires personnalisés avec chauffeur guide local."
                serviceUrl={canonical}
            />
            <CircuitPageLayout />
        </PageLayout>
    )
}

export default TaxiCircuitAlsace



