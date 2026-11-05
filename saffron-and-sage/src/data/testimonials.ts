export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
  /**
   * true = placeholder copy written for design purposes, NOT a real guest
   * review. The Testimonials component shows a notice while any sample
   * entries remain. Replace these with genuine feedback (with permission)
   * and set `sample` to false, or delete the entries.
   */
  sample: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Placeholder: a short line from a real guest about the food or the evening goes here.",
    author: "Guest name",
    context: "Dinner for two",
    sample: true,
  },
  {
    id: "t2",
    quote:
      "Placeholder: a line about the service, the room or a dish that stayed with them.",
    author: "Guest name",
    context: "Birthday dinner",
    sample: true,
  },
  {
    id: "t3",
    quote:
      "Placeholder: a line from a regular about why they keep coming back.",
    author: "Guest name",
    context: "Sunday lunch",
    sample: true,
  },
];
