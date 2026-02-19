import { useRef } from 'react';

const NewsCarousel = () => {
  const scrollContainer = useRef(null);

  const articles = [
    {
      id: 1,
      title: "Dr. Christian Anderson on Health Administration",
      summary: "U of T's Institute of Health Policy features Dr. Christian Anderson, 20/20 Mission board member, on health administration leadership.",
      image: "/ImageForChristianAnderson.jpeg",
      link: "https://ihpme.utoronto.ca/2026/02/christian-anderson-health-administration/"
    },
    {
      id: 2,
      title: "Kobe Li Receives Starfish Fellowship",
      summary: "The Hamilton Spectator covers Kobe Li's Starfish Fellowship recognition for his community impact through 20/20 Mission.",
      image: "/Kobe_Li-1.jpg",
      link: "https://www.thespec.com/news/hamilton-region/kobe-li-starfish-fellowship/article_18000a75-6839-56aa-be57-498766fbcb77.html"
    },
    {
      id: 3,
      title: "Terry Fox Humanitarian Award Recipient",
      summary: "Kobe Li earns prestigious award for his work with 20/20 Mission, helping thousands see clearly.",
      image: "/Collection Process/IMG_1184.jpg",
      link: "https://www.eng.mcmaster.ca/news/a-vision-for-change-ibiomed-student-kobe-li-earns-terry-fox-humanitarian-award/"
    },
    {
      id: 4,
      title: "Launching an Eyeglasses Organization",
      summary: "Read about Kobe Li's journey of launching 20/20 Mission through the Duke of Edinburgh's International Award.",
      image: "/Collection Process/IMG_1219.jpg",
      link: "https://www.dukeofed.org/articles/launching-an-eyeglasses-organization/"
    },
    {
      id: 5,
      title: "Duke of Ed Photo Memories",
      summary: "Golden Award memories: Documenting the transformative impact of the Guatemala mission trip.",
      image: "/Guatemala/Guatemala April 2024 Day 6-71.jpg", 
      link: "https://intaward.org/photocompmemories/kobe-l/"
    },
    {
      id: 6,
      title: "A Vision For Change",
      summary: "McMaster News highlights the global impact of the student-led 20/20 Mission.",
      image: "/Dominican Republic 2025/Dominican Republic 2025-14.jpg",
      link: "https://news.mcmaster.ca/a-vision-for-change/"
    }
  ];

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      const scrollAmount = 340;

      if (direction === 'left') {
        if (scrollLeft <= 10) {
          // At the start, loop to the end
          scrollContainer.current.scrollTo({ left: scrollWidth - clientWidth, behavior: 'smooth' });
        } else {
          scrollContainer.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // At the end, loop to the start
          scrollContainer.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-center text-primary mb-8">Recent News</h2>
        
        <div className="relative group px-12">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {articles.map((article) => (
              <a 
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-80 snap-center bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group/card"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display='none';
                      e.target.parentElement.classList.add('bg-gray-200');
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{article.summary}</p>
                  <span className="inline-block mt-4 text-primary font-medium text-sm hover:underline">Read Article →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
