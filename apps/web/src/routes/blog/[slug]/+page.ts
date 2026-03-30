import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		// Path: routes/blog/[slug] -> go up to src, then into posts
		const post = await import(`../../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}
