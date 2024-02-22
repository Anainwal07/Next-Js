//Given the example of how to use the link

import Link from "next/link"

const LearnLink = () => {
   const id = 69 ; 

  return (
    <>
        <Link href="/admin/dashboard">Go to Admin Dashboard</Link>
        <Link href={`/user/profile/${id}`}>Go to User Profile</Link>
    </>
  )
}

export default LearnLink