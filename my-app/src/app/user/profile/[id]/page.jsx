// giving hte example of dynamic routing (by using [id])

const MyProfile = ({params}) => {
  const id = params.id;
    return (
    <div>MyProfile {id}</div>
  )
}

export default MyProfile;
