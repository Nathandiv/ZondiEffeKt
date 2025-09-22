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
      title: 'Big Stepper ',
      category: 'Music Video',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'The official music video for Big Stepper ',
      videoUrl: 'https://www.youtube.com/embed/5o6OS7OtelY?enablejsapi=1&controls=1&modestbranding=1&rel=0',
      isPlaying: false
    },
    {
      id: 2,
      title: 'Ablum Shoot',
      category: 'Photography',
      image: 'https://i.pinimg.com/736x/ad/41/36/ad41363da5b282dfaab6575e40d1102a.jpg',
      description: 'People Forget To Be People'
    },
    {
      id: 3,
      title: 'Never Ride Remix',
      category: 'Music Video',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'The official music video for NEVER RIDE REMIX',
      videoUrl: 'https://www.youtube.com/embed/H5ulCs6-Ihs?enablejsapi=1&controls=1&modestbranding=1&rel=0',
      isPlaying: false
    },
   {
      id: 4,
      title: 'Hype Magazine',
      category: 'Photography',
      image: 'https://i.pinimg.com/736x/2c/a6/a3/2ca6a3fc4f32dccb6d36867762d9fc37.jpg',
      description: 'All Doggs Go To Heaven'
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