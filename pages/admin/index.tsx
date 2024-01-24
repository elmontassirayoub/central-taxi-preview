import AdminPageLayout from "@/components/admin/PageLayout"
import requireAdminAuthentication from "@/lib/middlewares/requireAdminAuthentication"
import { useEffect, useState } from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type RideType = {
  _id: string,
  firstname: string,
  lastname: string,
  from: string,
  to: string,
  time: string,
  date: string,
}

export const getServerSideProps = requireAdminAuthentication((context: any) => {
  return {
    props: {}
  }
})
export default function Index({ }) {

  const [rides, setRides] = useState([])
  const [filter, setFilter] = useState("all")
  const options = [{ value: "all", label: "tous" }, { value: "pending", label: "en attente" }, { value: "confirmed", label: "confirmé" }, { value: "cancelled", label: "annulé" }]
  const [page, setPage] = useState(0)
  const [pageInfo, setPageInfo] = useState({ more: false, length: 0 })

  const getRides = async () => {

    try {
      const response = await fetch(`/api/admin?filter=${filter}&page=${page}`)
      if (response.status === 200) {
        const results = await response.json()
        setRides(results?.rides)
        setPageInfo({ more: results?.more, length: results?.length })
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getRides()
  }, [filter, page])

  return <AdminPageLayout page="/admin">
    <div className="flex-1 w-full">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between lg:items-center w-full">
        <div className="shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)] p-4 rounded-[10px]">
          <h1 className="text-[20px]">Numéro de Reservation</h1>
          <p className="text-[24px] font-bold">{pageInfo?.length}</p>
        </div>
        <select className="h-fit border-[1px] outline-0 p-2 rounded-[5px] text-[18px] capitalize font-semibold" value={filter} onChange={e => { setFilter(e.target.value); setPage(0) }}>
          {
            options?.map((option) => <option value={option?.value} className="capitalize">{option?.label}</option>)
          }
        </select>
      </div>
      <div className="my-5 flex justify-end gap-5 items-center">
        <button className={`p-2 ${page > 0 ? "hover:bg-[#CECECE]" : "text-[#CECECE]"}  rounded-[50%] flex justify-center items-center`} onClick={() => setPage(page - 1)} disabled={page <= 0}>
          <ArrowBackIosIcon className="" />
        </button>
        <p className="">Page {page + 1}</p>
        <button className={`p-2 ${pageInfo.more ? "hover:bg-[#CECECE]" : "text-[#CECECE]"} rounded-[50%] flex justify-center items-center`} onClick={() => setPage(page + 1)} disabled={!pageInfo.more}>
          <ArrowForwardIosIcon className="" />
        </button>
      </div>
      <div className="w-full">
        <table className="mt-10 !w-full table-fixed">
          <thead className="text-white !w-full">
            <tr className="max-w-full flex gap-5 bg-[#33475A] rounded-t-[5px]">
              <th className="bg-[#33475A] py-5 rounded-tl-[5px] text-left w-[125px] block truncate pl-5">Nom</th>
              <th className="bg-[#33475A] py-5 text-left flex-1 truncate">Depart</th>
              <th className="bg-[#33475A] py-5 text-left flex-1 truncate">Arrive</th>
              <th className="bg-[#33475A] py-5 text-left">Date et Temps</th>
              <th className="bg-[#33475A] py-5 rounded-tr-[5px] text-left pr-5">Actions</th>
            </tr>
          </thead>
          <tbody className="flex !w-full flex-col gap-2 divide-y divide-x py-2">
            {
              rides?.map((ride: RideType) => <tr key={ride?._id} className="max-w-full flex gap-5 bg-[#CECECE] overflow-hidden">
                <td className="py-5 text-left w-[125px] block truncate pl-5">{ride.firstname} {ride.lastname}</td>
                <td className="py-5 text-left flex-1 truncate break-all">{ride.from}</td>
                <td className="py-5 text-left flex-1 truncate break-all">{ride.to}</td>
                <td className="py-5 text-left">{ride.date.split("T")[0]} {ride.time}</td>
                <td className="py-5 rounded-tr-[5px] text-left pr-5">Actions</td>

              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </AdminPageLayout>
}