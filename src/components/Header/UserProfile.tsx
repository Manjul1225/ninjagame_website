import Image from "next/image"

const UserProfile = () => {
  return (
    <button className="flex-row m-3 flex">
        <Image src="/images/svgs/user.svg" width={28} height={28} alt="" className=""/>
        <Image src="/images/svgs/downarrow.svg" width={28} height={28} alt="" className="btn mx-2"/>
    </button>
  )
}

export default UserProfile  