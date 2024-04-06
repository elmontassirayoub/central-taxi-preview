import "tailwindcss/tailwind.css";
import checkAuthentication from "@/lib/middlewares/checkAuthenticated";
import PageLayout from "@/components/common/PageLayout";
import SEO from "@/components/SEO";
import Landing from "@/layouts/Landing";

export const getServerSideProps = checkAuthentication(async (context: any, admin: boolean) => {
  return {
    props: {
      admin
    }
  }
})
export default function Home({ admin = false }: { admin: boolean }) {

  return (
    <PageLayout page="/" admin={admin} >
      <SEO title="Taxi Strasbourg : faites confiance à Central Taxi 67" description="Central Taxi 67 offre un service de transport en taxi de haute qualité sur Strasbourg. Chauffeurs courtois et professionnels, véhicules confortables et sécurisés à votre disposition." />
      <Landing admin={admin} />
    </PageLayout>
  )
}

export const metadata = {
  title: 'Next.js',
}