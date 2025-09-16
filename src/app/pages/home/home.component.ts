import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface FeaturedWork {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  videoUrl?: string;
  safeVideoUrl?: SafeResourceUrl | null;
  isPlaying?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredWorks: FeaturedWork[] = [
    {
      id: 1,
      title: 'Music Video - Chart Topper',
      category: 'Music Video',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Cinematic music video for platinum-selling artist',
      videoUrl: 'https://www.youtube.com/embed/5o6OS7OtelY?enablejsapi=1&controls=1&modestbranding=1&rel=0',
      isPlaying: false
    },
    {
      id: 2,
      title: 'Artist Portrait Session',
      category: 'Photography',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Album cover shoot for Grammy-nominated artist'
    },
    {
      id: 3,
      title: 'Brand Content Creation',
      category: 'Content Creation',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Social media content for major record label',
      videoUrl: 'https://www.youtube.com/embed/H5ulCs6-Ihs?enablejsapi=1&controls=1&modestbranding=1&rel=0',
      isPlaying: false
    },
    {
      id: 4,
      title: 'Live Performance Video',
      category: 'Music Video',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Multi-camera concert videography',
      videoUrl: 'https://www.youtube.com/embed/IiYNws-iK_I?enablejsapi=1&controls=1&modestbranding=1&rel=0',
      isPlaying: false
    }
  ];

  services = [
    {
      icon: '🎬',
      title: 'Music Video Production',
      description: 'Cinematic music videos for well-known artists with creative direction and post-production'
    },
    {
      icon: '📸',
      title: 'Artist Photography',
      description: 'Professional photography for musicians, album covers, and promotional materials'
    },
    {
      icon: '📱',
      title: 'Content Creation',
      description: 'Social media content, behind-the-scenes footage, and digital marketing materials'
    },
    {
      icon: '🏢',
      title: 'Business Photography',
      description: 'Corporate headshots, brand photography, and commercial content for businesses'
    }
  ];

  isQuoteModalOpen = false;
  isConsentModalOpen = false;
  isBookingModalOpen = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Initialize any animations or scroll effects here
    // Sanitize video URLs for security
    this.featuredWorks.forEach(work => {
      if (work.videoUrl) {
        work.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(work.videoUrl);
      }
    });
  }

  onVideoClick(work: FeaturedWork) {
    work.isPlaying = true;
    // Optionally, you can use the YouTube API to play the video programmatically
    // This requires the iframe to have an ID and the YouTube IFrame API loaded
  }

  onVideoLoaded(event: Event, work: FeaturedWork) {
    // This event fires when the video metadata is loaded
    if (work.isPlaying) {
      const iframe = event.target as HTMLIFrameElement;
      // Note: Direct control requires YouTube IFrame API
      // Example: iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  }

  openQuoteModal() {
    this.isQuoteModalOpen = true;
  }

  closeQuoteModal() {
    this.isQuoteModalOpen = false;
  }

  openConsentModal() {
    this.isConsentModalOpen = true;
  }

  closeConsentModal() {
    this.isConsentModalOpen = false;
  }

  openBookingModal() {
    this.isBookingModalOpen = true;
  }

  closeBookingModal() {
    this.isBookingModalOpen = false;
  }
}