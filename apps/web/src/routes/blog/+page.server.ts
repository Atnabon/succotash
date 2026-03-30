import { z } from "zod";

const PostMetadataSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
  category: z.string().optional(),
});

export const load = async () => {
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });
  
  const posts = Object.entries(paths).map(([path, file]) => {
    const slug = path.split('/').pop()?.replace('.md', '');
    const metadata = (file as any).metadata;
    
    const result = PostMetadataSchema.safeParse(metadata);
    
    if (!result.success) {
      console.error(`Error validating metadata for ${path}:`, result.error.format());
      // Return a minimal fallback or skip
      // Returning null and filtering is safer
      return null;
    }

    return {
      slug,
      ...result.data
    };
  }).filter((post): post is NonNullable<typeof post> => post !== null);
  
  return {
    posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  };
};
