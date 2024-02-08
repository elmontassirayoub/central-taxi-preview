import AdminPageLayout from "@/components/admin/PageLayout"
import requireAdminAuthentication from "@/lib/middlewares/requireAdminAuthentication"
import { useEffect, useState } from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Confirm from "@/components/admin/modals/Confirm";

export type RideType = {
  _id: string,
  firstname: string,
  lastname: string,
  from: string,
  to: string,
  time: string,
  date: string,
  price: string,
  status: string
}

export const getServerSideProps = requireAdminAuthentication((context: any) => {

  if(context.params) {
    return {
        props: {id: context.params.id[0]}
      }
  }
  return {
    props: {}
  }
})
export default function Index({ id }: {id: string | undefined}) {

  const [rides, setRides] = useState([])
  const [filter, setFilter] = useState("all")
  const options = [{ value: "all", label: "tous" }, { value: "pending", label: "en attente" }, { value: "confirmed", label: "confirmé" }, { value: "cancelled", label: "annulé" }]
  const [page, setPage] = useState(0)
  const [pageInfo, setPageInfo] = useState({ more: false, length: 0 })
  const [state, setState] = useState({ confirm: false, cancel: false, details: false })
  const [selectedRide, setSelectedRide] = useState<RideType | null>(null)
  const [firstTime, setFirstTime] = useState(true)

  const getRides = async () => {

    try {
      const url = (id && firstTime) ? `/api/admin?filter=${filter}&page=${page}&id=${id}` : `/api/admin?filter=${filter}&page=${page}`
      const response = await fetch(url)
      if (response.status === 200) {
        const results = await response.json()
        setRides(results?.rides)
        setPageInfo({ more: results?.more, length: results?.length })
        if(id && firstTime) {
          const newSelectedRide = results.rides.find((ride: RideType) => ride._id === id)
          setSelectedRide(newSelectedRide)
          setState({confirm: false, cancel: false, details: true})
        }  
      }
    } catch (e) {
      console.log(e)
    } finally {
      if(firstTime) setFirstTime(false)
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
              <th className="bg-[#33475A] py-5 text-left flex-1 truncate lg:block hidden">Depart</th>
              <th className="bg-[#33475A] py-5 text-left flex-1 truncate lg:block hidden">Arrive</th>
              <th className="bg-[#33475A] py-5 text-left lg:block hidden">Date et Temps</th>
              <th className="bg-[#33475A] py-5 rounded-tr-[5px] text-center border-l-[1px] pr-5 flex-1">Actions</th>
            </tr>
          </thead>
          <tbody className="flex !w-full flex-col gap-2 divide-y divide-x py-2">
            {
              rides?.map((ride: RideType) => <tr key={ride?._id} className="max-w-full flex gap-5 bg-[#CECECE] overflow-hidden text-[14px]">
                <td className="py-5 text-left w-[125px] block truncate pl-5">{ride.firstname} {ride.lastname}</td>
                <td className="py-5 text-left flex-1 truncate break-all truncate lg:block hidden">{ride.from}</td>
                <td className="py-5 text-left flex-1 truncate break-all truncate lg:block hidden">{ride.to}</td>
                <td className="py-5 text-left truncate lg:block hidden">{ride.date.split("T")[0]} {ride.time}</td>
                <td className="py-5 rounded-tr-[5px] text-left pr-5 lg:text-[14px] text-[12px] flex-1 flex border-l-[1px] justify-around">
                  {
                    ride?.status === "pending" && <><button className="underline text-[#A70000]" onClick={() => { setSelectedRide(ride); setState({ confirm: false, cancel: true, details: false }) }}><p>Annuler</p></button>
                      <button className="underline text-[#008000]" onClick={() => { setSelectedRide(ride); setState({ confirm: true, cancel: false, details: false }) }}><p>Confirmer</p></button></>
                  }
                  <button className="underline" onClick={() => { setSelectedRide(ride); setState({ confirm: false, cancel: false, details: true }) }}><p>Détails</p></button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {
        selectedRide !== null && <Confirm modalState={state.confirm} modalClose={setState} ride={selectedRide} type="confirm" />
      }
      {
        selectedRide !== null && <Confirm modalState={state.cancel} modalClose={setState} ride={selectedRide} type="cancel" />
      }
      {
        selectedRide !== null && <Confirm modalState={state.details} modalClose={setState} ride={selectedRide} type="details" />
      }
    </div>
  </AdminPageLayout>
}