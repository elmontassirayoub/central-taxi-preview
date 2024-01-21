import { getSession } from "@/pages/api/users/editProfile"

const requireAdminAuthentication = (serverSideProps: Function) => {
    return async (context: any) => {
        const session = await getSession(context)

        if (session?.user?.email !== process.env.ADMIN_EMAIL) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            }
        }

        return await serverSideProps(context)
    }
}

export default requireAdminAuthentication