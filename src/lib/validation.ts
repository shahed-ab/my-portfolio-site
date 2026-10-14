import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  engagement: z.enum(
    [
      "Full-Time Software Engineering Role",
      "Junior / Internship Role",
      "Contract or Freelance Project",
      "Collaboration",
      "Other",
    ],
    {
      message: "Please select an engagement scope",
    }
  ),
  brief: z.string().min(10, "Please provide at least 10 characters for context").max(2000, "Brief cannot exceed 2000 characters"),
  website_hp: z.string().optional(), // Honeypot field (should remain empty)
});

export type ContactFormData = z.infer<typeof contactSchema>;
