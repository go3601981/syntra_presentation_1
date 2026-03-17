import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-growth-path',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 py-8">
      
      <!-- Background Neural Network SVG -->
      <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <path d="M0,1000 L1000,0" stroke="#3EFFC4" stroke-width="0.1" fill="none" class="animate-pulse" />
          <path d="M0,0 L1000,1000" stroke="#3EFFC4" stroke-width="0.1" fill="none" class="animate-pulse" style="animation-delay: 1s" />
        </svg>
      </div>

      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>

      <div class="relative z-10 w-full max-w-5xl">
        <!-- Header -->
        <div class="text-center mb-8 animate-fade-in">
          <div class="inline-block px-3 py-1 border border-syntra-action-primary/30 rounded text-[10px] font-bold tracking-[0.4em] text-syntra-action-primary uppercase mb-4">
            Ascension Protocol
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            {{ t.translate('slide13.title') }}
          </h2>
          <div class="mt-6 w-24 h-1 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_15px_#3EFFC4]"></div>
        </div>

        <!-- Ladder System (Ascension) -->
        <div class="relative flex flex-col gap-6">
          
          <!-- Level 3: Regional Leader -->
          <div class="flex items-center gap-8 md:gap-16 animate-level-up self-end w-full md:w-[85%]" style="animation-delay: 1.2s">
            <div class="hidden md:block flex-1 text-right">
              <p class="text-white/40 text-lg font-light italic leading-relaxed">{{ t.translate('slide13.level3_desc') }}</p>
            </div>
            <div class="relative group">
              <div class="absolute -inset-6 bg-syntra-action-primary/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div class="relative w-24 h-24 md:w-40 md:h-40 rounded-[32px] bg-white flex items-center justify-center shadow-[0_0_50px_rgba(62,255,196,0.2)] border border-syntra-action-primary/50 group-hover:scale-110 transition-transform duration-500">
                <mat-icon class="text-syntra-action-primary text-5xl md:text-7xl">stars</mat-icon>
                <!-- Orbiting Ring -->
                <div class="absolute inset-0 border-2 border-syntra-action-primary/20 rounded-[32px] animate-ping-slow"></div>
              </div>
            </div>
            <div class="flex-1">
              <div class="text-[10px] font-mono text-syntra-action-primary mb-2 tracking-widest">PHASE_03</div>
              <h3 class="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter uppercase">{{ t.translate('slide13.level3_title') }}</h3>
              <div class="h-1.5 w-32 bg-syntra-action-primary rounded-full shadow-[0_0_10px_#3EFFC4]"></div>
              <p class="md:hidden text-white/40 text-sm mt-4">{{ t.translate('slide13.level3_desc') }}</p>
            </div>
          </div>

          <!-- Connector 2 -->
          <div class="absolute left-[50%] top-[30%] h-[20%] w-px bg-gradient-to-b from-syntra-action-primary to-transparent hidden md:block animate-grow-line" style="animation-delay: 1s"></div>

          <!-- Level 2: Top Performer -->
          <div class="flex items-center gap-8 md:gap-16 animate-level-up self-center w-full md:w-[85%]" style="animation-delay: 0.6s">
            <div class="hidden md:block flex-1 text-right">
              <p class="text-white/40 text-lg font-light italic leading-relaxed">{{ t.translate('slide13.level2_desc') }}</p>
            </div>
            <div class="relative group">
              <div class="relative w-20 h-20 md:w-32 md:h-32 rounded-[28px] bg-white/5 border-2 border-syntra-action-primary/40 flex items-center justify-center backdrop-blur-xl group-hover:bg-white/10 transition-all duration-500">
                <mat-icon class="text-syntra-action-primary text-4xl md:text-6xl">trending_up</mat-icon>
              </div>
            </div>
            <div class="flex-1">
              <div class="text-[10px] font-mono text-syntra-action-primary mb-2 tracking-widest">PHASE_02</div>
              <h3 class="text-2xl md:text-4xl font-black text-white mb-2 tracking-tighter uppercase">{{ t.translate('slide13.level2_title') }}</h3>
              <div class="h-1.5 w-24 bg-syntra-action-primary/60 rounded-full"></div>
              <p class="md:hidden text-white/40 text-sm mt-4">{{ t.translate('slide13.level2_desc') }}</p>
            </div>
          </div>

          <!-- Connector 1 -->
          <div class="absolute left-[50%] top-[65%] h-[15%] w-px bg-gradient-to-b from-syntra-action-primary/50 to-transparent hidden md:block animate-grow-line" style="animation-delay: 0.4s"></div>

          <!-- Level 1: Partner -->
          <div class="flex items-center gap-8 md:gap-16 animate-level-up self-start w-full md:w-[85%]" style="animation-delay: 0s">
            <div class="hidden md:block flex-1 text-right">
              <p class="text-white/40 text-lg font-light italic leading-relaxed">{{ t.translate('slide13.level1_desc') }}</p>
            </div>
            <div class="relative w-16 h-16 md:w-28 md:h-28 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
              <mat-icon class="text-white/40 text-3xl md:text-5xl">handshake</mat-icon>
            </div>
            <div class="flex-1">
              <div class="text-[10px] font-mono text-white/20 mb-2 tracking-widest">PHASE_01</div>
              <h3 class="text-xl md:text-3xl font-black text-white mb-2 tracking-tighter uppercase">{{ t.translate('slide13.level1_title') }}</h3>
              <div class="h-1.5 w-16 bg-white/10 rounded-full"></div>
              <p class="md:hidden text-white/40 text-sm mt-4">{{ t.translate('slide13.level1_desc') }}</p>
            </div>
          </div>

        </div>

        <!-- Progress Indicator -->
        <div class="mt-10 flex justify-center animate-fade-in" style="animation-delay: 2s">
          <div class="flex items-center gap-3 px-6 py-3 rounded-full bg-syntra-action-primary/5 border border-syntra-action-primary/20 backdrop-blur-xl">
            <div class="w-2 h-2 rounded-full bg-syntra-action-primary animate-ping"></div>
            <span class="text-[10px] font-black text-syntra-action-primary uppercase tracking-[0.3em]">Continuous Evolution Protocol</span>
          </div>
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

    @keyframes level-up {
      0% { opacity: 0; transform: translateY(60px) scale(0.9); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    .animate-level-up {
      opacity: 0;
      animation: level-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes grow-line {
      from { height: 0; opacity: 0; }
      to { height: 15%; opacity: 1; }
    }
    .animate-grow-line {
      animation: grow-line 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    .animate-ping-slow {
      animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  `]
})
export class SlideGrowthPathComponent {
  t = inject(TranslationService);
}
