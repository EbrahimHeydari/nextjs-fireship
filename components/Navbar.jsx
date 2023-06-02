import Link from 'next/link'

const Navbar = () => {
	const user = null
	const username = null

	return (
		<div className='navbar'>
			<ul>
				<Link href='/'>
					<button className='btn-logo'>FEED</button>
				</Link>

				{username ? (
					<>
						<li>
							<Link href='/admin'>
								<button className='btn-blue'>Write Post</button>
							</Link>
						</li>
						<li>
							<Link href={`/${username}`}>
								<img
									src={user?.photoUrl}
									alt='user'
								/>
							</Link>
						</li>
					</>
				) : (
					<Link href='/enter'>
						<button className='btn-blue'>Log in</button>
					</Link>
				)}
			</ul>
		</div>
	)
}

export default Navbar
