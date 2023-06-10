import { firestore, getUserWithUsername, postToJSON } from '@/lib/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import styles from '@/styles/Post.module.css'

export async function getStaticProps({ params }) {
	const { username, slug } = params
	const userDoc = await getUserWithUsername(username)

	let post
	let path

	if (userDoc) {
		const postRef = userDoc.ref.collection('posts').doc(slug)
		post = postToJSON(await postRef.get())

		path = postRef.path
	}

	return {
		props: { post, path },
		revalidate: 5000,
	}
}

const Post = () => {
	return <div></div>
}

export default Post

export async function getStaticPaths() {
	// Improve my using admin SDK to select empty docs
	const snapShot = await firestore.collectionGroup('posts').get()

	const paths = snapShot.docs.map(doc => {
		const { slug, username } = doc.data

		return {
			params: { username, slug },
		}
	})

	return {
		paths,
		fallback: 'blocking',
	}
}
