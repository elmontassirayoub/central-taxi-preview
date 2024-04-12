import SEO from "@/components/SEO"
import PageLayout from "@/components/common/PageLayout"
import TourismeLayout from "@/layouts/services/Tourisme"
import checkAuthentication from "@/lib/middlewares/checkAuthenticated"

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
    return {
        props: {
            admin
        }
    }
})

const Tourisme = ({ admin }: { admin: boolean }) => {
    return (
        <PageLayout page="/services/tourisme" admin={admin}>
            <SEO title="Taxi Tourisme Strasbourg et Alsace avec Central Taxi 67" description="Voulez-vous passer un séjour de rêve en Alsace ? Comptez sur notre Service de Taxi Strasbourg pour découvrir les plus beaux sites touristiques de la région." />
            <TourismeLayout />
        </PageLayout>
    )
}

export default Tourisme