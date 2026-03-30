import type { InterestItemSchema } from "./schemas";
import { z } from "zod";

type InterestItem = z.infer<typeof InterestItemSchema>;

export const interests: {
  reading: InterestItem[];
  listening: InterestItem[];
  speaking: InterestItem[];
} = {
  reading: [
    {
      title: "Clean Code",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
      take: "Foundation for writing maintainable software",
      featured: true,
    },
    {
      title: "Hands-On Machine Learning",
      image: "https://www.oreilly.com/covers/urn:orm:book:9781492032632/300w/",
      take: "Best practical ML guide out there",
    },
    {
      title: "Designing Data-Intensive Applications",
      image: "https://www.oreilly.com/covers/urn:orm:book:9781491903063/300w/",
      take: "Changed how I think about systems",
    },
    {
      title: "The Pragmatic Programmer",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=300&fit=crop",
      take: "Timeless engineering wisdom",
    },
    {
      title: "Deep Learning with Python",
      image: "https://www.oreilly.com/covers/urn:orm:book:9781617294433/300w/",
      take: "Keras made accessible",
    },
  ],
  listening: [],
  speaking: [
    {
      title: "AI for Impact Solving Africa's Challenges",
      event: "A2SV Hackathon 2024",
      image: "https://hackathon.a2sv.org/assets/newLogo.png",
      take: "Building solutions that matter",
      featured: true,
    },
  ]
};
