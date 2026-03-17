import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark text-syntra-text-inverse px-6">
      <!-- Cinematic Zoom Background -->
      <div class="absolute inset-0 z-0 animate-slow-zoom opacity-30">
        <!-- Neural Network Lines SVG -->
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3EFFC4;stop-opacity:0.2" />
              <stop offset="100%" style="stop-color:#0B7A58;stop-opacity:0.1" />
            </linearGradient>
          </defs>
          <g stroke="url(#grad1)" stroke-width="0.5" fill="none">
            <path d="M100,100 L900,900 M100,900 L900,100 M500,0 L500,1000 M0,500 L1000,500" />
            <circle cx="500" cy="500" r="400" />
            <circle cx="500" cy="500" r="200" />
            <path d="M200,200 Q500,100 800,200 T800,800 Q500,900 200,800 T200,200" />
            <path d="M300,300 L700,700 M300,700 L700,300" />
          </g>
          <!-- Animated Nodes -->
          <circle cx="500" cy="500" r="3" fill="#3EFFC4" class="animate-pulse" />
          <circle cx="100" cy="100" r="2" fill="#3EFFC4" class="animate-pulse" />
          <circle cx="900" cy="900" r="2" fill="#3EFFC4" class="animate-pulse" />
          <circle cx="100" cy="900" r="2" fill="#3EFFC4" class="animate-pulse" />
          <circle cx="900" cy="100" r="2" fill="#3EFFC4" class="animate-pulse" />
        </svg>
      </div>

      <div class="relative z-10 text-center max-w-5xl">
        <!-- Logo / Title with Fade + Glow -->
        <div class="mb-12 animate-fade-glow">
          <h1 class="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-syntra-text-inverse drop-shadow-[0_0_15px_rgba(62,255,196,0.5)]">
            {{ t.translate('slide1.title') }}
          </h1>
          <div class="h-1 w-32 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_10px_#3EFFC4]"></div>
        </div>

        <!-- Tagline with Typing Animation -->
        <div class="mb-8 h-20 md:h-24">
          <h2 class="text-2xl md:text-4xl font-light text-syntra-action-primary tracking-wide leading-tight overflow-hidden whitespace-nowrap border-r-4 border-syntra-action-primary animate-typing mx-auto max-w-fit">
            {{ t.translate('slide1.subtitle') }}
          </h2>
        </div>

        <!-- Opportunity Text -->
        <div class="animate-fade-in-up delay-1000">
          <p class="text-lg md:text-xl text-syntra-text-muted uppercase tracking-[0.3em] font-medium">
            {{ t.translate('slide1.opportunity') }}
          </p>
        </div>
      </div>

      <!-- Bottom Decorative Line -->
      <div class="absolute bottom-20 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-syntra-action-primary to-transparent opacity-50"></div>
    </div>
  `,
  styles: [`
    @keyframes slow-zoom {
      0% { transform: scale(1); }
      100% { transform: scale(1.1); }
    }
    .animate-slow-zoom {
      animation: slow-zoom 20s ease-in-out infinite alternate;
    }
    @keyframes fade-glow {
      0% { opacity: 0; filter: blur(10px); }
      100% { opacity: 1; filter: blur(0); }
    }
    .animate-fade-glow {
      animation: fade-glow 2s cubic-bezier(0.2, 0.65, 0.2, 1) forwards;
    }
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    .animate-typing {
      animation: typing 3.5s steps(40, end) forwards, blink-caret .75s step-end infinite;
    }
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #3EFFC4; }
    }
    @keyframes fade-in-up {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fade-in-up 1s ease-out forwards;
    }
    .delay-1000 {
      animation-delay: 1s;
    }
  `]
})
export class SlideTitleComponent {
  t = inject(TranslationService);
}
