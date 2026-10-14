import React, { useState } from 'react';
import { 
  BookOpen, Clock, User, ArrowRight, ChevronRight, Sparkles, Tag, Check, Share2 
} from 'lucide-react';

interface BlogPageProps {
  onNavigatePage: (page: string, param?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigatePage }) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const articles = [
    {
      id: 'gift-ideas-pakistan',
      title: '10 Best Custom Gift Ideas in Pakistan for Birthdays, Weddings & Corporate Events',
      author: 'Printify Design Team',
      date: '28 July 2026',
      readTime: '6 min read',
      category: 'Gifting Guide',
      image: 'https://images.unsplash.com/photo-1513885045263-c23eaa5041d4?auto=format&fit=crop&q=80&w=800',
      summary: 'Looking for unique personalized gifts in Lahore, Karachi, or Islamabad? Discover top custom printed mugs, photo keychains, engraved pens, and luxury gift boxes that leave a lasting impression.',
      content: `
        Finding the perfect gift that feels personal, thoughtful, and memorable can often be challenging. Generic store-bought items lack emotional connection. That is why custom printed gifts have become the #1 trend across Pakistan for birthdays, anniversaries, graduations, and corporate celebrations.

        Here are the top 10 custom gift ideas available at Printify.pk:

        1. Color-Changing Magic Mugs: Cold ceramic mugs that reveal a secret family photo or romantic message when hot coffee or chai is poured inside!
        2. Laser-Engraved Metallic Pen Sets: Sleek matte black or golden pens permanently etched with the recipient's name or doctor/lawyer designation.
        3. Custom Acrylic & Wooden Keychains: Durable car keychains with photo collages or license plate numbers.
        4. Frosted Highball Glassware: Personalized glass sets featuring cafe logos or custom family crests.
        5. 100% Cotton Graphic T-Shirts: Premium Direct-to-Film printed tees for university batch events and reunion trips.
        6. Executive Employee Onboarding Boxes: 5-piece matching corporate sets containing a thermal flask, notebook, pen, mug, and keychain.
        7. Photo Printed Stainless Steel Tumblers: Double-wall vacuum insulated water bottles that keep water ice-cold for 12 hours.
        8. Custom Printed Ceramic Coasters: Waterproof coaster sets with traditional Pakistani truck art or customized quotes.
        9. Custom Name Embossed Leather Diaries: Executive planners for professionals and students.
        10. Personalized Magic Cushions: Reversible sequin cushions revealing custom photos when brushed.

        Why Custom Gifts Matter:
        Unlike mass-produced products, custom gifts showcase time, effort, and affection. At Printify.pk, we manufacture every item with HD precision and deliver anywhere in Pakistan within 48 hours.
      `,
    },
    {
      id: 'sublimation-vs-laser',
      title: 'Sublimation Printing vs Laser Engraving: Which Custom Method Lasts Longer?',
      author: 'Eng. Usman Ali',
      date: '20 July 2026',
      readTime: '8 min read',
      category: 'Printing Tech',
      image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800',
      summary: 'An in-depth technical comparison of high-definition dye sublimation vs fiber laser engraving for ceramic mugs, stainless steel flasks, and executive pens.',
      content: `
        When choosing custom printed promotional products or personalized gifts, customers often ask: "Which printing method will last the longest?" The answer depends on the material of the item (ceramic vs metal vs fabric) and the intended use.

        1. HD Dye Sublimation (Best for Mugs & Ceramics):
        Dye sublimation is a chemical process where solid inks are vaporized into gas at 200°C under high pressure. The ink gas penetrates the microscopic pores of polymer-coated ceramic mugs or polyester fabrics.
        - Pros: Full multi-color photo realism, vibrant gradients, scratch resistance, dishwasher safe.
        - Best for: Custom photo mugs, magic mugs, coasters, mousepads.

        2. Fiber Laser Engraving (Best for Metals & Wood):
        Laser engraving uses a high-powered focused light beam to physically etch or burn away top layers of metal, anodized aluminum, or wood.
        - Pros: 100% permanent mark, will NEVER wear off, rust or fade over decades, high executive finish.
        - Best for: Metallic pens, stainless steel thermal flasks, wooden keychains, leather keyrings.

        3. DTF Direct-To-Film (Best for Apparel):
        DTF transfers water-based pigments onto cotton t-shirts using TPU adhesive powder cured in an infrared oven.
        - Pros: Soft hand feel, stretchable, withstands 50+ machine wash cycles without cracking.

        Conclusion:
        For metallic pens and water bottles, Laser Engraving offers lifetime durability. For vibrant photo gifts on ceramic mugs, Dye Sublimation is unmatched!
      `,
    },
    {
      id: 'corporate-kits-guide',
      title: 'How to Build the Ultimate Corporate Employee Onboarding Kit in Pakistan',
      author: 'Fatima Noor (HR Advisor)',
      date: '12 July 2026',
      readTime: '5 min read',
      category: 'Corporate Branding',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800',
      summary: 'A step-by-step guide for HR leaders and corporate procurement managers in Lahore, Karachi, and Islamabad to design high-impact employee welcome boxes.',
      content: `
        A new employee’s first day sets the tone for their entire journey at a company. Top tech startups, banks, and multinational firms across Pakistan use customized Employee Onboarding Welcome Kits to build immediate brand pride and culture.

        Key Elements of a Successful Welcome Kit:
        1. Custom Matte Hardtop Magnetic Box: Custom printed with company logo and motivational welcome slogan on the interior lid.
        2. Temperature Display Thermal Flask: Keeps tea or coffee warm during long coding sessions or client meetings.
        3. Laser Engraved Executive Metallic Pen: A smooth writing instrument with the employee's name etched on the barrel.
        4. Ceramic Logo Mug: Essential for desk coffee.
        5. Custom Leatherette Notebook Diary: For daily task management and meeting notes.

        Bulk Pricing & Free Samples:
        Printify.pk provides free digital 3D mockups and physical sample kit dispatches to HR teams across Pakistan within 24 hours.
      `,
    },
  ];

  const activeArticle = articles.find((a) => a.id === selectedArticleId);

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Header */}
      <div className="bg-[#0b182e] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => onNavigatePage('home')} className="hover:text-amber-400">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-bold">Blog & Printing Guides</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Printify.pk Custom Printing Journal
            </h1>
            <p className="text-xs sm:text-sm text-amber-300 font-bold">
              Expert guides, printing technology comparisons, gift ideas, and corporate branding insights.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Active Article Full View or Article Grid */}
        {activeArticle ? (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedArticleId(null)}
              className="text-xs font-extrabold text-amber-600 hover:underline flex items-center gap-1 mb-4"
            >
              ← Back to All Articles
            </button>

            <div className="space-y-3">
              <span className="bg-amber-100 text-amber-800 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                {activeArticle.category}
              </span>

              <h1 className="text-2xl sm:text-3xl font-black text-[#0b182e] leading-tight">
                {activeArticle.title}
              </h1>

              <div className="flex items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-4">
                <span className="flex items-center gap-1 font-bold text-slate-700">
                  <User className="w-3.5 h-3.5 text-amber-500" />
                  {activeArticle.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {activeArticle.date} ({activeArticle.readTime})
                </span>
              </div>
            </div>

            <div className="aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
            </div>

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-4 pt-2">
              {activeArticle.content}
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                onClick={() => onNavigatePage('shop')}
                className="bg-[#0b182e] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                Explore Custom Products
              </button>

              <button
                onClick={() => setSelectedArticleId(null)}
                className="text-slate-600 text-xs font-bold hover:text-slate-900"
              >
                Back to Blog List
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-3xl border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-16/9 bg-slate-100 overflow-hidden relative">
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-[#0b182e] text-amber-400 font-black text-[9px] uppercase px-2.5 py-1 rounded-md">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="font-extrabold text-[#0b182e] text-base leading-snug line-clamp-2">
                      {art.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedArticleId(art.id)}
                    className="w-full bg-slate-100 hover:bg-[#0b182e] hover:text-amber-400 text-slate-900 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
