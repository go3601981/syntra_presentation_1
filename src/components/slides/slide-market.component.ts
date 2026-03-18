import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ShoppingCart, Cloud, Stethoscope, Landmark, User } from 'lucide-angular';

@Component({
  selector: 'app-slide-market',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 py-12">
      
      <!-- Background Neural Network SVG -->
      <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <g stroke="#3EFFC4" stroke-width="0.5" fill="none">
            <path d="M0,500 Q250,400 500,500 T1000,500" class="animate-pulse" />
            <path d="M0,300 Q250,200 500,300 T1000,300" class="animate-pulse" style="animation-delay: 0.5s" />
            <path d="M0,700 Q250,600 500,700 T1000,700" class="animate-pulse" style="animation-delay: 1s" />
          </g>
        </svg>
      </div>

      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>

      <div class="relative z-10 w-full max-w-6xl">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <div class="inline-block px-3 py-1 border border-syntra-action-primary/30 rounded text-[10px] font-bold tracking-[0.4em] text-syntra-action-primary uppercase mb-4">
            Market Sector Analysis
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            {{ t.translate('slide9.title') }}
          </h2>
          <div class="mt-6 w-24 h-1 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_15px_#3EFFC4]"></div>
        </div>

        <!-- Industries Grid -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
          @for (industry of industries; track industry.id) {
            <div 
              class="group relative aspect-square p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-syntra-action-primary/50 transition-all duration-700 animate-market-reveal overflow-hidden flex flex-col items-center justify-center text-center"
              [style.animation-delay]="industry.id * 0.1 + 's'"
            >
              <!-- Animated Background Glow -->
              <div class="absolute inset-0 bg-syntra-action-primary/10 opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <!-- Icon Container -->
              <div class="relative z-10 w-20 h-20 rounded-2xl bg-syntra-bg-dark border border-white/10 flex items-center justify-center mb-6 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(62,255,196,0.4)]">
                <lucide-icon [name]="industry.icon" [size]="44" class="text-gray-500 group-hover:text-syntra-action-primary transition-colors duration-500"></lucide-icon>
              </div>

              <!-- Content -->
              <div class="relative z-10">
                <h3 class="text-lg font-bold text-white group-hover:text-syntra-action-primary transition-colors duration-500 tracking-tight uppercase">
                  {{ t.translate('slide9.ind' + industry.id) }}
                </h3>
                <div class="mt-2 w-0 h-0.5 bg-syntra-action-primary mx-auto group-hover:w-8 transition-all duration-500"></div>
              </div>

              <!-- Technical Scanline -->
              <div class="absolute top-0 left-0 w-full h-px bg-syntra-action-primary/40 animate-scanline opacity-20 group-hover:opacity-100"></div>
              
              <!-- Sector Code -->
              <div class="absolute top-4 right-4 text-[8px] font-mono text-white/10 uppercase tracking-widest">
                SEC_0{{industry.id}}
              </div>
            </div>
          }
        </div>

        <!-- Market Note -->
        <div class="mt-16 text-center animate-fade-in" style="animation-delay: 1.5s">
          <p class="text-white/40 text-sm font-light tracking-wide italic">
            "{{ t.translate('slide9.subtitle') }}"
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bg-noise {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes market-reveal {
      from { opacity: 0; transform: scale(0.9) translateY(30px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .animate-market-reveal {
      opacity: 0;
      animation: market-reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes scanline {
      0% { transform: translateY(0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(200px); opacity: 0; }
    }
    .group:hover .animate-scanline {
      animation: scanline 2s linear infinite;
    }
  `]
})
export class SlideMarketComponent {
  t = inject(TranslationService);

  industries = [
    { id: 1, icon: 'shopping-cart' },
    { id: 2, icon: 'cloud' },
    { id: 3, icon: 'stethoscope' },
    { id: 4, icon: 'landmark' },
    { id: 5, icon: 'user' }
  ];
}
