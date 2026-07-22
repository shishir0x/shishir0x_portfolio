export interface Heading {
	id: string;
	text: string;
	level: number;
}

function slugify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export function extractHeadings(content: string): Heading[] {
	const headings: Heading[] = [];
	const headingRegex = /^(#{2,3})\s+(.+)$/gm;
	const matches = Array.from(content.matchAll(headingRegex));
	for (const match of matches) {
		const level = match[1].length;
		const text = match[2].trim();
		const id = slugify(text);

		headings.push({ id, text, level });
	}

	return headings;
}
