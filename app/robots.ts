import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `https://shishirpandey085.com.np/sitemap.xml`,
		host: `https://shishirpandey085.com.np`,
	};
}
