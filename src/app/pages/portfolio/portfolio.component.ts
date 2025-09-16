import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent{
  activeFilter = 'all';
  
  portfolioItems = [
    {
      id: 1,
      title: 'Elegant Wedding Ceremony',
      category: 'photography',
      type: 'Wedding',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Capturing the magic of a beautiful wedding day'
    },
    {
      id: 2,
      title: 'Corporate Brand Video',
      category: 'videography',
      type: 'Corporate',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional corporate storytelling video',
      videoUrl: 'https://www.youtube.com/embed/5o6OS7OtelY?enablejsapi=1&controls=1&modestbranding=1&rel=0',
      safeVideoUrl: null as SafeResourceUrl | null
    },
    {
      id: 3,
      title: 'Portrait Session',
      category: 'photography',
      type: 'Portrait',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional portrait photography session'
    },
    {
      id: 4,
      title: 'Event Highlights',
      category: 'videography',
      type: 'Event',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Dynamic event coverage and highlights',
      videoUrl: 'https://www.youtube.com/embed/H5ulCs6-Ihs?enablejsapi=1&controls=1&modestbranding=1&rel=0',
      safeVideoUrl: null as SafeResourceUrl | null
    },
    {
      id: 5,
      title: 'Family Moments',
      category: 'photography',
      type: 'Family',
      image: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Capturing precious family memories'
    },
    {
      id: 6,
      title: 'Music Video Production',
      category: 'videography',
      type: 'Music',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Creative music video production',
      videoUrl: 'https://www.youtube.com/embed/IiYNws-iK_I?enablejsapi=1&controls=1&modestbranding=1&rel=0',
      safeVideoUrl: null as SafeResourceUrl | null
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    // Sanitize video URLs for security
    this.portfolioItems.forEach(item => {
      if (item.videoUrl) {
        item.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(item.videoUrl);
      }
    });
  }

  get filteredItems() {
    if (this.activeFilter === 'all') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item => item.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}