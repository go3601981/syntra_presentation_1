import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-problem',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 py-12">
      <!-- Digital Noise / Static Background -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>
      
      <!-- Red Warning Accent Lines -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
      
      <div class="relative z-10 w-full max-w-5xl">
        <!-- Header with Glitch Effect -->
        <div class="text-center mb-20">
          <div class="inline-block px-4 py-1 border border-red-600/50 rounded text-red-500 text-xs font-bold tracking-widest uppercase mb-6 animate-glitch-text">
            {{ t.translate('slide3.warning') }}
          </div>
          <h1 class="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter animate-glitch">
            {{ t.translate('slide3.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-syntra-text-inverse opacity-70 font-light max-w-2xl mx-auto">
            {{ t.translate('slide3.subtitle') }}
          </p>
        </div>

        <!-- Disappearing Logos / Noise Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-70">
          @for (logo of logos; track $index) {
            <div class="relative group">
              <!-- Logo Placeholder -->
              <div class="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm animate-fade-out-noise" [style.animation-delay]="$index * 0.1 + 's'">
                <div class="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full blur-sm"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-white/40 font-bold tracking-tighter text-lg">{{ logo }}</span>
                </div>
              </div>
              <!-- Glitch Overlay -->
              <div class="absolute inset-0 bg-red-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity animate-glitch-fast"></div>
            </div>
          }
        </div>

        <!-- Red Scanning Line -->
        <div class="absolute left-0 w-full h-px bg-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-scan"></div>
      </div>
    </div>
  `,
  styles: [`
    .bg-noise {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    @keyframes glitch {
      0% { transform: translate(0); text-shadow: none; }
      20% { transform: translate(-2px, 2px); text-shadow: 2px 0 #ff0000, -2px 0 #00ff00; }
      40% { transform: translate(-2px, -2px); text-shadow: -2px 0 #ff0000, 2px 0 #00ff00; }
      60% { transform: translate(2px, 2px); text-shadow: 2px 0 #ff0000, -2px 0 #00ff00; }
      80% { transform: translate(2px, -2px); text-shadow: -2px 0 #ff0000, 2px 0 #00ff00; }
      100% { transform: translate(0); text-shadow: none; }
    }

    .animate-glitch {
      animation: glitch 3s infinite linear alternate-reverse;
    }

    .animate-glitch-fast {
      animation: glitch 0.2s infinite linear;
    }

    @keyframes fade-out-noise {
      0% { opacity: 0.8; filter: blur(0); transform: scale(1); }
      50% { opacity: 0.4; filter: blur(4px); transform: scale(0.95); }
      100% { opacity: 0.1; filter: blur(8px); transform: scale(0.9); }
    }

    .animate-fade-out-noise {
      animation: fade-out-noise 2.5s infinite ease-in-out alternate;
    }

    @keyframes scan {
      0% { top: 0%; }
      100% { top: 100%; }
    }

    .animate-scan {
      animation: scan 2.5s linear infinite;
    }

    @keyframes glitch-text {
      0% { opacity: 1; transform: skew(0deg); }
      5% { opacity: 0.8; transform: skew(10deg); }
      10% { opacity: 1; transform: skew(0deg); }
      15% { opacity: 0.9; transform: skew(-5deg); }
      20% { opacity: 1; transform: skew(0deg); }
      100% { opacity: 1; transform: skew(0deg); }
    }

    .animate-glitch-text {
      animation: glitch-text 4s infinite;
    }
  `]
})
export class SlideProblemComponent {
  t = inject(TranslationService);
  logos = ['BRAND A', 'CORP B', 'GLOBAL C', 'TECH D', 'LUXE E', 'PRIME F', 'CORE G', 'NEXT H'];
}
