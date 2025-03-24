
import { ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Hero from "@/components/sections/Hero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "How to optimize your business processes",
    summary: "Discover the top strategies for streamlining your operations and improving efficiency.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "June 12, 2023",
    category: "Business",
    slug: "optimize-business-processes",
    author: {
      name: "Jane Smith",
      role: "Business Analyst",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 2,
    title: "The future of digital transformation",
    summary: "Explore the latest trends and technologies shaping the future of business in a digital world.",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "May 24, 2023",
    category: "Technology",
    slug: "future-digital-transformation",
    author: {
      name: "John Davis",
      role: "Technology Director",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 3,
    title: "Building a customer-centric culture",
    summary: "Learn how to create a business environment that puts customers at the center of everything you do.",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 18, 2023",
    category: "Customer Experience",
    slug: "customer-centric-culture",
    author: {
      name: "Emily Chen",
      role: "Customer Experience Manager",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 4,
    title: "Effective leadership in times of change",
    summary: "Strategies for leading your team through periods of transformation and uncertainty.",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    imageUrl: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2023",
    category: "Leadership",
    slug: "leadership-times-change",
    author: {
      name: "Michael Johnson",
      role: "Leadership Coach",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 5,
    title: "Sustainable business practices for the future",
    summary: "How implementing sustainable practices can benefit your business and the environment.",
    content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    imageUrl: "https://images.unsplash.com/photo-1623259838743-9849b9c6c523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "February 17, 2023",
    category: "Sustainability",
    slug: "sustainable-business-practices",
    author: {
      name: "Sarah Lewis",
      role: "Sustainability Consultant",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: 6,
    title: "Financial strategies for business growth",
    summary: "Expert financial advice to help your business scale and achieve sustainable growth.",
    content: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "January 30, 2023",
    category: "Finance",
    slug: "financial-strategies-growth",
    author: {
      name: "Robert Taylor",
      role: "Financial Advisor",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  },
];

const categories = [
  "All",
  "Business",
  "Technology",
  "Leadership",
  "Customer Experience",
  "Finance",
  "Sustainability",
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(
    (post) =>
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "All" || post.category === selectedCategory)
  );

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20">
        <Hero
          title="Our Latest Insights"
          subtitle="Business Blog"
          description="Stay informed with our latest articles, insights, and expert advice on business strategies, industry trends, and best practices."
        />

        <section className="section-padding">
          <div className="page-container page-padding">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Search Results Info */}
                {searchTerm && (
                  <div className="mb-8 animate-fadeIn">
                    <p className="text-muted-foreground">
                      Showing {filteredPosts.length} results for "{searchTerm}"
                    </p>
                  </div>
                )}

                {/* Blog Posts */}
                {currentPosts.length > 0 ? (
                  currentPosts.map((post, idx) => (
                    <div
                      key={post.id}
                      className="animate-fadeIn"
                      style={{ animationDelay: `${0.1 * idx}s` }}
                    >
                      <Card className="overflow-hidden">
                        <div className="aspect-[16/9]">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Card.Header className="pt-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary inline-flex items-center">
                              {post.category}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {post.date}
                            </span>
                          </div>
                          <Card.Title className="text-2xl hover:text-primary transition-colors">
                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                          </Card.Title>
                        </Card.Header>
                        <Card.Content>
                          <p className="text-muted-foreground mb-6">
                            {post.summary}
                          </p>
                          <div className="flex items-center">
                            <img
                              src={post.author.imageUrl}
                              alt={post.author.name}
                              className="h-10 w-10 rounded-full mr-3"
                            />
                            <div>
                              <p className="font-medium text-sm">
                                {post.author.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {post.author.role}
                              </p>
                            </div>
                          </div>
                        </Card.Content>
                        <Card.Footer>
                          <Button
                            href={`/blog/${post.slug}`}
                            variant="ghost"
                            className="p-0 h-auto hover:bg-transparent hover:text-primary"
                          >
                            Read article
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Card.Footer>
                      </Card>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium mb-2">No results found</h3>
                    <p className="text-muted-foreground">
                      We couldn't find any posts matching your search criteria.
                    </p>
                  </div>
                )}

                {/* Pagination */}
                {filteredPosts.length > postsPerPage && (
                  <div className="flex justify-center mt-12">
                    <nav className="flex items-center gap-1">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-md hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none"
                        aria-label="Previous page"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-md flex items-center justify-center ${
                            currentPage === page
                              ? "bg-primary text-white"
                              : "hover:bg-secondary"
                          }`}
                          aria-label={`Page ${page}`}
                          aria-current={currentPage === page ? "page" : undefined}
                        >
                          {page}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-md hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none"
                        aria-label="Next page"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </nav>
                  </div>
                )}
              </div>
              
              <div className="space-y-8">
                {/* Search */}
                <Card className="animate-fadeIn">
                  <Card.Header>
                    <Card.Title>Search</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <form onSubmit={handleSearch} className="relative">
                      <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 pr-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <button
                        type="submit"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                        aria-label="Search"
                      >
                        <Search className="h-5 w-5" />
                      </button>
                    </form>
                  </Card.Content>
                </Card>
                
                {/* Categories */}
                <Card className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                  <Card.Header>
                    <Card.Title>Categories</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => handleCategoryChange(category)}
                            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                              selectedCategory === category
                                ? "bg-secondary font-medium"
                                : "hover:bg-secondary/50"
                            }`}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </Card.Content>
                </Card>
                
                {/* Recent Posts */}
                <Card className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                  <Card.Header>
                    <Card.Title>Recent Posts</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <ul className="space-y-4">
                      {blogPosts.slice(0, 4).map((post) => (
                        <li key={post.id} className="border-b border-border/50 last:border-0 pb-4 last:pb-0">
                          <a 
                            href={`/blog/${post.slug}`} 
                            className="flex gap-3 group"
                          >
                            <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                              <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                {post.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {post.date}
                              </p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Card.Content>
                </Card>
                
                {/* Newsletter */}
                <Card className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                  <Card.Header>
                    <Card.Title>Newsletter</Card.Title>
                    <Card.Description>
                      Subscribe to our newsletter to get the latest updates.
                    </Card.Description>
                  </Card.Header>
                  <Card.Content>
                    <form className="space-y-4">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      />
                      <Button type="submit" className="w-full">
                        Subscribe
                      </Button>
                    </form>
                  </Card.Content>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
