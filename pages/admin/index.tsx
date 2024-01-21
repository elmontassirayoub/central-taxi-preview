import requireAdminAuthentication from "@/lib/middlewares/requireAdminAuthentication"

export const getServerSideProps = requireAdminAuthentication((context: any) => {
  return {
    props: {}
  }
})
export default function Index({}) {
    return <div>Admin Panel</div>
}