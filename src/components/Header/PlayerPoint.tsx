import { useEffect, useState } from "react"
import Image from "next/image"
import { useContext } from "react"
import { DataContext } from "@/app/datacontext"
import axios from "axios"

  const PlayerPoint = () => {
    const {username} = useContext(DataContext);
    const [point, setPoint] = useState()
    const getplayerinfo = async () => {
      try {
        const player = await axios.post('/api/getUserData', {"username":username});
        if (player?.data.status === 200) {
          const updatedPoint = player?.data.user?.point || '0'; // Set point to '0' if it is null
          setPoint(updatedPoint);
        }
      } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getplayerinfo();
  }, [])

  return (
    <div className="border rounded border-[#F4B13E] lg:flex flex-row m-4 hidden">
        <Image src="/images/svgs/wallet.svg" width={28} height={28} alt="" className="mx-3"/>
        <span className="text-[#F4B13E] text-[16px] p-2 min-h-10">{point}</span>
        <Image src="/images/svgs/downarrow.svg" width={28} height={28} alt="" className="mx-1"/>
    </div>
  )
}

export default PlayerPoint  