import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent   {
  public safeVideoUrl: SafeResourceUrl;
  public currentTestimonial = 0;

  constructor(private sanitizer: DomSanitizer) {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5o6OS7OtelY?enablejsapi=1&controls=1&modestbranding=1&rel=0');
  }

  testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael Johnson',
      role: 'Wedding Clients',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'VisionFrame exceeded our expectations in every way. The attention to detail, creative vision, and professional approach made our wedding photography absolutely perfect. We couldn\'t be happier with the results.',
      rating: 5,
      service: 'Wedding Photography'
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The corporate video they produced for our company launch was phenomenal. Professional, creative, and delivered exactly what we needed to make an impact. Highly recommend their services.',
      rating: 5,
      service: 'Corporate Videography'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with VisionFrame was a pleasure from start to finish. Their portrait session was relaxed yet professional, and the final images were stunning. Perfect for our executive headshots.',
      rating: 5,
      service: 'Portrait Photography'
    },
    {
      id: 4,
      name: 'Mark Thompson',
      role: 'Event Coordinator',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'They captured our corporate event beautifully. Every important moment was documented with artistic flair. The team was unobtrusive yet thorough. Excellent service all around.',
      rating: 5,
      service: 'Event Photography'
    },
    {
      id: 5,
      name: 'Jennifer & Robert Davis',
      role: 'Anniversary Clients',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Our 25th anniversary photoshoot was magical thanks to VisionFrame. They made us feel comfortable and captured our love story beautifully. The photos will be treasured forever.',
      rating: 5,
      service: 'Anniversary Photography'
    },
    {
      id: 6,
      name: 'Alex Martinez',
      role: 'Music Producer',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The music video they created for our latest single was incredible. Creative direction, cinematography, and post-production were all top-notch. Definitely working with them again.',
      rating: 5,
      service: 'Music Video Production'
    }
  ];

  nextTestimonial() {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  previousTestimonial() {
    this.currentTestimonial = this.currentTestimonial === 0 ? this.testimonials.length - 1 : this.currentTestimonial - 1;
  }

  goToTestimonial(index: number) {
    this.currentTestimonial = index;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth < 640 && this.testimonials.length > 1) {
      this.currentTestimonial = 0; // Reset to first testimonial on mobile resize
    }
  }
}