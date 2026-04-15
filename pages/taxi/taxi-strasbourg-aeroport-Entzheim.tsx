import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import AirportPageLayout from "@/layouts/taxi/AirportPageLayout"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

const TaxiStrasbourgAeroport = ({ admin }: { admin: boolean }) => {
    const canonical = "https://www.central-taxi67.fr/taxi/taxi-strasbourg-aeroport-Entzheim"
    return (
        <PageLayout page="/taxi/taxi-strasbourg-aeroport-Entzheim" admin={admin}>
            <SEO 
                title="Taxi Strasbourg Aéroport Entzheim : Voyagez l'esprit léger" 
                description="Envolez-vous sans stress ! Réservez votre taxi à Strasbourg et profitez d'un trajet fluide, ponctuel et confortable jusqu'à l'aéroport d'Entzheim." 
                canonical={canonical}
                structuredDataType="TaxiService"
                serviceName="Taxi Strasbourg Aéroport Entzheim - Central Taxi 67"
                serviceDescription="Transfert taxi professionnel entre Strasbourg et l'aéroport d'Entzheim. Service 24/7 avec suivi de vol et assistance bagages."
                serviceUrl={canonical}
            />
            <AirportPageLayout 
                subtitle="Notre compagnie de taxi vous emmène partout, avec style et ponctualité. Que vous partiez ou arriviez à l'aéroport d'Entzheim, vous pouvez vous fier à nos chauffeurs qui connaissent l'Alsace comme leur poche"
                pricingSubtitle="Central Taxi 67 vous garantit un trajet sécurisé, rapide et confortable à bord de ses véhicules haut de gamme. Voici un aperçu des durées de course les plus courantes :"
                benefitsSubtitle="Votre chauffeur ne regarde pas sa montre avec impatience. Vous bénéficiez de 30 minutes d'attente gratuites lors de votre prise en charge à l'aéroport."
                heroCardImageSrc="/images/hero/taxi-aeroport-entzheim-hero.png"
                heroCardImageAlt="Taxis devant l'aéroport de Strasbourg Entzheim"
                ctaBannerBodyFr="Entrepreneur pressé, voyageur solitaire ou groupe d'amis ? Notre taxi Strasbourg aéroport Entzheim peut s'occuper de votre transport avec le sourire et le professionnalisme qui font notre réputation. Complétez notre formulaire de réservation en ligne si vous voulez voyager sans le moindre stress."
                ctaBannerBodyEn="Busy entrepreneur, solo traveler or group of friends? Our Strasbourg Entzheim airport taxi can handle your transport with the smile and professionalism we're known for. Complete our online booking form if you want to travel without the slightest stress."
            />
        </PageLayout>
    )
}

export default TaxiStrasbourgAeroport



