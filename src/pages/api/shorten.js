import { generateRandomString } from '@services/random_str.js';
import { db, eq, Links, ne } from 'astro:db';

export async function POST({ request }) {
	const { url } = await request.json();
  
	let hash = generateRandomString(12);
	
	console.log('Shorten: ', url, ' => posible hash: ', hash);
	const existingLink = await db.select().from(Links).where(eq(Links.originalUrl, url)).where(ne(Links.hash, hash));
	
	if (existingLink.length > 0) {
		// already existent link
		console.log('Existing link: ', JSON.stringify(existingLink));
		hash = existingLink[0].hash;
	}else{
		console.log('New link: ', url, ' => hash: ', hash);
		const newLink = await db.insert(Links).values({
			originalUrl: url,
			hash: hash,
			time: Date.now(),
		});
	}
	
	console.log('Resolved info: ', hash);
	
	return new Response(JSON.stringify({ shortUrl: hash }), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	});
}