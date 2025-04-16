
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Regular Customer",
    content: "The quality of sarees from BlissBoutique is exceptional. I've never been disappointed with any of my purchases. The intricate detailing and premium fabrics make their products stand out from others.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ananya Patel",
    role: "Fashion Blogger",
    content: "I've been featuring BlissBoutique products on my blog for over a year now. Their unique designs and quality craftsmanship have made them a favorite among my followers. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Meera Kapoor",
    role: "Wedding Customer",
    content: "I ordered my bridal lehenga from BlissBoutique and couldn't have been happier. The attention to detail was remarkable, and the team was incredibly helpful throughout the customization process.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Hear from our satisfied customers about their shopping experience with BlissBoutique
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-sm border border-cream-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-boutique-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4 flex">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-cream-500 text-cream-500" />
                ))}
              </div>
              
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
