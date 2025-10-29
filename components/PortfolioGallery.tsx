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
          <div className="aspect-video">
            <video
              className="w-full h-full object-contain rounded-lg shadow-lg bg-black"
              controls
              preload="metadata"
            >
              <source src="/assets/vid1.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="aspect-video">
            <video
              className="w-full h-full object-contain rounded-lg shadow-lg bg-black"
              controls
              preload="metadata"
            >
              <source src="/assets/vid2.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};