import AdminPageLayout from "@/components/admin/PageLayout"
import requireAdminAuthentication from "@/lib/middlewares/requireAdminAuthentication"

export const getServerSideProps = requireAdminAuthentication((context: any) => {
  return {
    props: {}
  }
})
export default function Users({}) {
    return <AdminPageLayout page="/admin/reviews">
      <div className="flex-1">Reviews</div>
    </AdminPageLayout>
}