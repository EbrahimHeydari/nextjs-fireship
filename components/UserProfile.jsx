// UI Component for user profile

const UserProfile = ({ user }) => {
	return (
		<div className='box-center'>
			<img
				src={user.photoURL}
				className='card-img-center'
				alt='photo'
			/>
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName}</h1>
		</div>
	)
}

export default UserProfile
