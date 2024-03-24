import { useCallback, useEffect, useState } from "react"
import { setInterval } from "timers";

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
      console.error('Error fetching player data:', error);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(getplayerinfo, 5000);
    return () => clearInterval(intervalId);
  }, [getplayerinfo]);

  return (
    <p className="flex w-full items-center justify-between px-12">
      {username}<br></br>
      {point}
    </p>
  )
}

export default PlayerPoint