
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "sarees",
    name: "Sarees",
    description: "Elegant traditional sarees in silk, cotton, and designer variants",
    image: "https://images.unsplash.com/photo-1610189001353-89a30b2b7cdc?q=80&w=1974&auto=format&fit=crop",
    color: "bg-boutique-100",
  },
  {
    id: "jewelry",
    name: "Jewelry",
    description: "Exquisite handcrafted pieces for every occasion",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1974&auto=format&fit=crop",
    color: "bg-lavender-100",
  },
  {
    id: "dupattas",
    name: "Dupattas",
    description: "Versatile dupattas to complete your ethnic ensemble",
    image: "https://images.unsplash.com/photo-1636910059178-7a69e4689ea4?q=80&w=1974&auto=format&fit=crop",
    color: "bg-cream-100",
  }
];

export default function CategoryBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold">
            Shop By Category
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Explore our wide range of carefully curated collections designed to celebrate the rich traditions of Indian fashion
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`relative overflow-hidden rounded-xl ${category.color} group h-72 transition-all hover:shadow-md`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                <h3 className="font-heading text-xl font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-100 mb-4 max-w-xs">
                  {category.description}
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-fit bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20 hover:text-white"
                >
                  <Link to={`/category/${category.id}`}>
                    Explore Collection
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
