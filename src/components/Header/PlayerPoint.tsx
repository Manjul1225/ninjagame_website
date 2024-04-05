import { useEffect, useState } from "react"
import Image from "next/image"

const PlayerPoint = ({ username }) => {
  const [point, setPoint] = useState()
  const getplayerinfo = async () => {
    try {
      const secretKey = process.env.NEXT_PUBLIC_PlayFab_Secret_Keys;
      const segmentId = process.env.NEXT_PUBLIC_PlayFab_Segments;
      const titleId = process.env.NEXT_PUBLIC_PlayFab_Title_ID;
      const playersResponse = await fetch(`https://${titleId}.playfabapi.com/Admin/GetPlayersInSegment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-SecretKey': secretKey,
        },
        body: JSON.stringify({ SegmentId: segmentId }),
      });

      if (!playersResponse.ok) {
        const errorData = await playersResponse.json();
        throw new Error(errorData.errorMessage);
      }

      const playersInSegment = await playersResponse.json();
      const player = playersInSegment.data.PlayerProfiles.find(player => player.LinkedAccounts[0].Username === username);

      if (player) {
        const updatedPoint = player.Statistics.Point || '0'; // Set point to '0' if it is null
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