import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import MedicalPageLayout from "@/layouts/taxi/MedicalPageLayout"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

const TaxiMedicalStrasbourg = ({ admin }: { admin: boolean }) => {
    const canonical = "https://www.central-taxi67.fr/taxi/taxi-medical-strasbourg"
    return (
        <PageLayout page="/taxi/taxi-medical-strasbourg" admin={admin}>
            <SEO
                title="Taxi médical Strasbourg et Grand Est"
                description="Réservez facilement votre taxi médical pour vos rendez-vous médicaux à Strasbourg depuis n'importe quelle ville du Grand-Est : Mulhouse, Colmar, Sélestat…"
                canonical={canonical}
                structuredDataType="TaxiService"
                serviceName="Taxi médical Strasbourg - Central Taxi 67"
                serviceDescription="Service de taxi médical conventionné à Strasbourg et dans le Grand Est. Transport médicalisé agréé CPAM pour rendez-vous médicaux et hospitalisations."
                serviceUrl={canonical}
            />
            <MedicalPageLayout
                heroCardImageSrc="/images/hero/taxi-medical-strasbourg-hero.png"
                heroCardImageAlt="Taxi conventionné à Strasbourg devant un hôpital avec la cathédrale Notre-Dame en arrière-plan au coucher du soleil — transport médical Central Taxi 67."
            />
        </PageLayout>
    )
}

export default TaxiMedicalStrasbourg

