'use client';

export const PortfolioGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Student Testimonials</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          See what our students have to say
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="aspect-video bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Testimonial 1</h3>
              <p className="text-gray-600">Video coming soon</p>
            </div>
          </div>
          <div className="aspect-video bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Testimonial 2</h3>
              <p className="text-gray-600">Video coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};