import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-opportunity',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-black px-6 py-12">
      <!-- Light Emerging from Darkness Effect -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] animate-pulse-slow"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_60%)] animate-pulse-slower"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 w-full max-w-5xl text-center">
        <!-- Title with fade-in and slight scale -->
        <div class="mb-12 animate-emerge">
          <h2 class="text-2xl md:text-3xl font-light text-blue-400/80 tracking-widest uppercase mb-4">
            {{ t.translate('slide4.title') }}
          </h2>
          <h1 class="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-gold-400 animate-gradient-x">
              {{ t.translate('slide4.subtitle') }}
            </span>
          </h1>
        </div>

        <!-- Dynamic Keywords Forming -->
        <div class="flex flex-wrap justify-center gap-6 mt-16">
          @for (keyword of keywords; track $index) {
            <div 
              class="px-8 py-4 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-md text-blue-300 font-medium tracking-wide shadow-[0_0_20px_rgba(59,130,246,0.1)] animate-form-keyword"
              [style.animation-delay]="$index * 0.3 + 1 + 's'"
            >
              <span class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                {{ t.translate('slide4.keyword' + (keyword)) }}
              </span>
            </div>
          }
        </div>

        <!-- Central Glow Orb -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <div class="w-64 h-64 bg-blue-500/20 rounded-full blur-[120px] animate-glow"></div>
        </div>
      </div>

      <!-- Bottom Accent -->
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </div>
  `,
  styles: [`
    :host {
      --gold-400: #fbbf24;
    }

    @keyframes emerge {
      from { opacity: 0; transform: scale(0.95) translateY(20px); filter: blur(10px); }
      to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
    }

    .animate-emerge {
      animation: emerge 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes form-keyword {
      0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(5px); }
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
    }

    .animate-form-keyword {
      opacity: 0;
      animation: form-keyword 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    @keyframes pulse-slow {
      0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
      50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.25; }
    }

    .animate-pulse-slow {
      animation: pulse-slow 8s ease-in-out infinite;
    }

    @keyframes pulse-slower {
      0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.05; }
      50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.1; }
    }

    .animate-pulse-slower {
      animation: pulse-slower 12s ease-in-out infinite;
    }

    @keyframes glow {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.5); opacity: 0.8; }
    }

    .animate-glow {
      animation: glow 6s ease-in-out infinite;
    }

    @keyframes gradient-x {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .animate-gradient-x {
      background-size: 200% auto;
      animation: gradient-x 5s linear infinite;
    }
  `]
})
export class SlideOpportunityComponent {
  t = inject(TranslationService);
  keywords = [1, 2, 3, 4];
}
