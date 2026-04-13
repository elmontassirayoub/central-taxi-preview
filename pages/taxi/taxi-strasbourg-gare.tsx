import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import StationPageLayout from "@/layouts/taxi/StationPageLayout"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

const TaxiStrasbourgGare = ({ admin }: { admin: boolean }) => {
    const canonical = "https://www.central-taxi67.fr/taxi/taxi-strasbourg-gare"
    return (
        <PageLayout page="/taxi/taxi-strasbourg-gare" admin={admin}>
            <SEO 
                title="Taxi Strasbourg Gare | Central Taxi 67" 
                description="Votre taxi à la gare de Strasbourg : confort, rapidité et sérénité. Chauffeurs ponctuels, aide aux bagages, service porte-à-porte. Réservation 24/7." 
                canonical={canonical}
                structuredDataType="TaxiService"
                serviceName="Taxi Strasbourg Gare - Central Taxi 67"
                serviceDescription="Service de taxi à la gare de Strasbourg. Transferts porte-à-porte, aide aux bagages, chauffeurs ponctuels. Service 24/7."
                serviceUrl={canonical}
            />
            <StationPageLayout
                heroCardImageSrc="/images/hero/taxi-strasbourg-gare-hero.png"
                heroCardImageAlt="Vue nocturne de la Gare de Strasbourg : verrière en verre, façade historique illuminée et entrée principale SNCF — taxi à la gare et transfert avec Central Taxi 67."
            />
        </PageLayout>
    )
}

export default TaxiStrasbourgGare



