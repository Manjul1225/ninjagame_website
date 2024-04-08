import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"

  const PlayerPoint = ({ username }) => {
    const [point, setPoint] = useState()
    const getplayerinfo = async () => {
      try {
        const player = await axios.post('/api/getUserData', {
          params:{username: username}
        });

        if (!player.status) {
          const errorData = await player.data;
          throw new Error(errorData.errorMessage);
        }

      // const playersInSegment = await player.json();
      // const player = playersInSegment.data.PlayerProfiles.find(player => player.LinkedAccounts[0].Username === username);

      if (player) {
        const updatedPoint = player.data.point || '0'; // Set point to '0' if it is null
        setPoint(updatedPoint);
      }
    } catch (error) {
      getplayerinfo();
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