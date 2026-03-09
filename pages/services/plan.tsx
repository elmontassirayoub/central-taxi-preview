import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import PlanLayout from "@/layouts/services/Plan"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

const Plan = ({ admin }: { admin: boolean }) => {
    const canonical = "https://www.central-taxi67.fr/services/plan"
    return (
        <PageLayout page="/services/plan" admin={admin}>
            <SEO 
                title="Découvrez le Plan du site de Central Taxi 67 - Strasbourg" 
                description="Trouvez instantanément les informations que vous recherchez sur notre plateforme de Taxi Strasbourg Service, grâce à ce plan de site"
                canonical={canonical}
            />
            <PlanLayout />
        </PageLayout>
    )
}

export default Plan