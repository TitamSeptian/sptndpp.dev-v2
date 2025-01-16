import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  cover: string;
  links: { name: string; url: string }[];
  date?: string;
  content: string; // Added content field
}

export function getArticles(): IArticle[] {
	const fileNames = fs.readdirSync(articlesDirectory);
	
	return fileNames.map((fileName) => {
		const filePath = path.join(articlesDirectory, fileName);
		const fileContents = fs.readFileSync(filePath, 'utf8');
		const { data, content } = matter(fileContents); // Extract frontmatter and content

		return {
			slug: fileName.replace(/\.mdx$/, ''), // Generate slug
			title: data.title || 'Untitled', // Default title if missing
			description: data.description || '', // Default description if missing
			cover: data.cover || '/default-cover.png', // Default cover if missing
			links: data.links || [], // Default to empty array if links are missing
			date: data.date,
			content
		};
	});
}
