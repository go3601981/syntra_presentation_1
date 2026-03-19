import { Component, inject, signal } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star, TrendingUp, Handshake } from 'lucide-angular';

@Component({
  selector: 'app-slide-growth-path',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 pt-4 pb-24">
      
      <!-- Background Neural Network SVG -->
      <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <path d="M0,1000 L1000,0" stroke="#3EFFC4" stroke-width="0.1" fill="none" class="animate-pulse" />
          <path d="M0,0 L1000,1000" stroke="#3EFFC4" stroke-width="0.1" fill="none" class="animate-pulse" style="animation-delay: 1s" />
        </svg>
      </div>

      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>

      <div class="relative z-10 w-full max-w-5xl">
        <!-- Header -->
        <div class="text-center mb-6 animate-fade-in">
          <div class="inline-block px-3 py-1 border border-syntra-action-primary/30 rounded text-[10px] font-bold tracking-[0.4em] text-syntra-action-primary uppercase mb-3">
            {{ t.translate('slide13.ascension_label') }}
          </div>
          <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            {{ t.translate('slide13.title') }}
          </h2>
          <div class="mt-4 w-24 h-1 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_15px_#3EFFC4]"></div>
        </div>

        <!-- Ladder System (Ascension) -->
        <div class="relative flex flex-col gap-4">
          
          <!-- Level 3: Regional Leader -->
          <div 
            (click)="activeLevel.set(3)"
            class="flex items-center gap-6 md:gap-12 animate-level-up self-end w-full md:w-[85%] cursor-pointer group transition-all duration-500" 
            [class.scale-105]="activeLevel() === 3"
            style="animation-delay: 1.2s"
          >
            <div class="hidden md:block flex-1 text-right">
              <p class="text-white/40 text-base font-light italic leading-relaxed" [class.text-syntra-action-primary]="activeLevel() === 3">{{ t.translate('slide13.level3_desc') }}</p>
            </div>
            <div class="relative">
              <div class="absolute -inset-4 bg-syntra-action-primary/20 rounded-[24px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" [class.opacity-100]="activeLevel() === 3"></div>
              <div 
                class="relative w-20 h-20 md:w-32 md:h-32 rounded-[24px] bg-white flex items-center justify-center shadow-[0_0_30px_rgba(62,255,196,0.2)] border border-syntra-action-primary/50 group-hover:scale-110 transition-transform duration-500"
                [class.scale-110]="activeLevel() === 3"
              >
                <lucide-icon name="star" [size]="44" class="text-syntra-action-primary md:hidden"></lucide-icon>
                <lucide-icon name="star" [size]="70" class="text-syntra-action-primary hidden md:block"></lucide-icon>
                <div class="absolute inset-0 border-2 border-syntra-action-primary/20 rounded-[24px] animate-ping-slow"></div>
              </div>
            </div>
            <div class="flex-1">
              <div class="text-[10px] font-mono text-syntra-action-primary mb-1 tracking-widest">PHASE_03</div>
              <h3 class="text-2xl md:text-4xl font-black text-white mb-1 tracking-tighter uppercase">{{ t.translate('slide13.level3_title') }}</h3>
              <div class="h-1 w-32 bg-syntra-action-primary rounded-full shadow-[0_0_10px_#3EFFC4]"></div>
            </div>
          </div>

          <!-- Level 2: Top Performer -->
          <div 
            (click)="activeLevel.set(2)"
            class="flex items-center gap-6 md:gap-12 animate-level-up self-center w-full md:w-[85%] cursor-pointer group transition-all duration-500" 
            [class.scale-105]="activeLevel() === 2"
            style="animation-delay: 0.6s"
          >
            <div class="hidden md:block flex-1 text-right">
              <p class="text-white/40 text-base font-light italic leading-relaxed" [class.text-syntra-action-primary]="activeLevel() === 2">{{ t.translate('slide13.level2_desc') }}</p>
            </div>
            <div class="relative">
              <div class="relative w-16 h-16 md:w-28 md:h-28 rounded-[20px] bg-white/5 border-2 border-syntra-action-primary/40 flex items-center justify-center backdrop-blur-xl group-hover:bg-white/10 transition-all duration-500" [class.bg-white/10]="activeLevel() === 2">
                <lucide-icon name="trending-up" [size]="35" class="text-syntra-action-primary md:hidden"></lucide-icon>
                <lucide-icon name="trending-up" [size]="60" class="text-syntra-action-primary hidden md:block"></lucide-icon>
              </div>
            </div>
            <div class="flex-1">
              <div class="text-[10px] font-mono text-syntra-action-primary mb-1 tracking-widest">PHASE_02</div>
              <h3 class="text-xl md:text-3xl font-black text-white mb-1 tracking-tighter uppercase">{{ t.translate('slide13.level2_title') }}</h3>
              <div class="h-1 w-24 bg-syntra-action-primary/60 rounded-full"></div>
            </div>
          </div>

          <!-- Level 1: Partner -->
          <div 
            (click)="activeLevel.set(1)"
            class="flex items-center gap-6 md:gap-12 animate-level-up self-start w-full md:w-[85%] cursor-pointer group transition-all duration-500" 
            [class.scale-105]="activeLevel() === 1"
            style="animation-delay: 0s"
          >
            <div class="hidden md:block flex-1 text-right">
              <p class="text-white/40 text-base font-light italic leading-relaxed" [class.text-syntra-action-primary]="activeLevel() === 1">{{ t.translate('slide13.level1_desc') }}</p>
            </div>
            <div class="relative w-14 h-14 md:w-24 md:h-24 rounded-[16px] bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-white/10 transition-all duration-500" [class.bg-white/10]="activeLevel() === 1">
              <lucide-icon name="handshake" [size]="28" class="text-white/40 md:hidden" [class.text-syntra-action-primary]="activeLevel() === 1"></lucide-icon>
              <lucide-icon name="handshake" [size]="52" class="text-white/40 hidden md:block" [class.text-syntra-action-primary]="activeLevel() === 1"></lucide-icon>
            </div>
            <div class="flex-1">
              <div class="text-[10px] font-mono text-white/20 mb-1 tracking-widest">PHASE_01</div>
              <h3 class="text-lg md:text-2xl font-black text-white mb-1 tracking-tighter uppercase">{{ t.translate('slide13.level1_title') }}</h3>
              <div class="h-1 w-16 bg-white/10 rounded-full"></div>
            </div>
          </div>

        </div>

        <!-- Detail Panel -->
        <div class="mt-8 p-5 rounded-2xl border border-syntra-action-primary/30 bg-syntra-action-primary/5 backdrop-blur-xl animate-fade-in" *ngIf="activeLevel() !== 0">
          <div class="flex items-center gap-5">
            <div class="w-10 h-10 rounded-full bg-syntra-action-primary flex items-center justify-center text-syntra-bg-dark font-black text-lg">
              {{ activeLevel() }}
            </div>
            <div>
              <h4 class="text-white font-bold uppercase tracking-widest text-sm">
                @if (activeLevel() === 1) { {{ t.translate('slide13.detail_l1_title') }} }
                @else if (activeLevel() === 2) { {{ t.translate('slide13.detail_l2_title') }} }
                @else { {{ t.translate('slide13.detail_l3_title') }} }
              </h4>
              <p class="text-white/60 text-xs mt-1">
                @if (activeLevel() === 1) { {{ t.translate('slide13.detail_l1_desc') }} }
                @else if (activeLevel() === 2) { {{ t.translate('slide13.detail_l2_desc') }} }
                @else { {{ t.translate('slide13.detail_l3_desc') }} }
              </p>
            </div>
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

    .animate-ping-slow {
      animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  `]
})
export class SlideGrowthPathComponent {
  t = inject(TranslationService);
  activeLevel = signal(0);
}

