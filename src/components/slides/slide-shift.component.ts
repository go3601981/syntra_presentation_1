import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowRight, Plus } from 'lucide-angular';

@Component({
  selector: 'app-slide-shift',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="h-full flex flex-col relative overflow-hidden bg-white pb-24">
      <!-- Background Split -->
      <div class="absolute inset-0 flex">
        <div class="w-1/2 bg-white relative overflow-hidden border-r border-black/5">
          <!-- Traditional Search Noise -->
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');">
          </div>
        </div>
        <div class="w-1/2 bg-syntra-bg-dark relative overflow-hidden">
          <!-- Neural Glow -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient from-syntra-action-primary/20 to-transparent blur-[120px]"></div>
          <!-- Neural Lines (Subtle) -->
          <svg class="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,45 50,50 T100,50" fill="none" stroke="white" stroke-width="0.1" />
            <path d="M0,30 Q25,35 50,30 T100,30" fill="none" stroke="white" stroke-width="0.1" />
            <path d="M0,70 Q25,65 50,70 T100,70" fill="none" stroke="white" stroke-width="0.1" />
          </svg>
        </div>
      </div>

      <!-- Content Container -->
      <div class="relative z-10 flex-1 flex flex-col">
        <!-- Header -->
        <div class="pt-12 pb-4 px-12 text-center animate-fade-in">
          <h1 class="text-5xl md:text-8xl font-black tracking-tighter mb-2 uppercase" style="color: #3e785c">
            {{ t.translate('slide2.title') }}
          </h1>
          <div class="h-1.5 w-32 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_20px_#3EFFC4] mb-4"></div>
          <p class="text-lg md:text-2xl text-slate-600 font-light max-w-4xl mx-auto">
            {{ t.translate('slide2.subtitle') }}
          </p>
        </div>

        <!-- Main Comparison -->
        <div class="flex-1 flex items-center px-12 gap-8 pb-6">
          <!-- Left: The Chaos -->
          <div class="flex-1 flex flex-col items-center justify-center animate-slide-left">
            <div class="w-full max-w-md space-y-6 relative">
              <div class="absolute -top-10 left-0 flex items-center gap-2">
                <span class="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
                <span class="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase border border-slate-300 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm">
                  {{ t.translate('slide2.search_label') }}
                </span>
              </div>
              
              <!-- Fragmented Search Results -->
              <div class="space-y-3 opacity-60 grayscale group hover:grayscale-0 transition-all duration-700">
                @for (i of [1,2,3]; track $index) {
                  <div class="bg-slate-100 p-3 border border-slate-300 shadow-sm rounded-lg transform rotate-[1deg] hover:rotate-0 transition-transform">
                    <div class="h-2.5 w-1/3 bg-blue-600/30 rounded mb-1.5"></div>
                    <div class="h-1.5 w-full bg-slate-300 rounded mb-1"></div>
                    <div class="h-1.5 w-2/3 bg-slate-300 rounded"></div>
                  </div>
                }
                <div class="text-center pt-2">
                  <span class="text-[10px] text-slate-500 font-medium italic">...and 1,270,000,000 more results</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Center: The Shift Divider -->
          <div class="relative h-full flex items-center justify-center">
            <div class="h-[60%] w-[1px] bg-gradient-to-b from-transparent via-slate-300 to-transparent relative">
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="w-16 h-16 bg-syntra-action-primary/10 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(62,255,196,0.2)] animate-glow group hover:bg-syntra-action-primary transition-all">
                  <lucide-icon [name]="ArrowRight" [size]="35" class="text-white/20 group-hover:text-[#00FF9D] transition-colors"></lucide-icon>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: The Intelligence -->
          <div class="flex-1 flex flex-col items-center justify-center animate-slide-right">
            <div class="w-full max-w-md space-y-6 relative">
              <div class="absolute -top-10 right-0 flex items-center gap-2">
                <span class="text-[10px] font-bold tracking-[0.3em] text-syntra-action-primary uppercase border border-syntra-action-primary/30 px-3 py-1 rounded-full bg-syntra-bg-dark/50 backdrop-blur-sm">
                  {{ t.translate('slide2.ai_label') }}
                </span>
                <span class="w-2 h-2 bg-syntra-action-primary rounded-full animate-pulse"></span>
              </div>

              <!-- Synthesized Answer Card -->
              <div class="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
                <!-- Animated Background Gradient -->
                <div class="absolute inset-0 bg-gradient-to-br from-syntra-action-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div class="flex items-center gap-3 mb-4 relative z-10">
                  <div class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:bg-syntra-action-primary transition-all duration-500 shadow-lg group-hover:shadow-[0_0_15px_rgba(62,255,196,0.4)]">
                    <lucide-icon [name]="Plus" [size]="17" class="text-white/20 group-hover:text-[#00FF9D] transition-colors"></lucide-icon>
                  </div>
                  <span class="text-syntra-action-primary font-bold text-xs tracking-widest uppercase">Synthesized Result</span>
                </div>

                <div class="space-y-3 relative z-10">
                  <div class="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div class="h-full bg-syntra-action-primary w-full animate-progress"></div>
                  </div>
                  <div class="space-y-3">
                    <p class="text-white text-lg font-medium leading-relaxed">
                      "The optimal strategy is a unified AI representation that ensures consistency across all LLM models..."
                    </p>
                    <div class="flex flex-col gap-1.5">
                      <div class="h-1.5 w-full bg-white/10 rounded"></div>
                      <div class="h-1.5 w-4/5 bg-white/10 rounded"></div>
                      <div class="h-1.5 w-2/3 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>

                <!-- Source Citations -->
                <div class="mt-6 flex gap-2 relative z-10">
                  <div class="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[7px] text-white/60">S1</div>
                  <div class="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[7px] text-white/60">S2</div>
                  <div class="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[7px] text-white/60">S3</div>
                  <span class="text-[9px] text-white/40 self-center ml-2">+ 12 verified sources</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(62,255,196,0.2); transform: scale(1); }
      50% { box-shadow: 0 0 40px rgba(62,255,196,0.5); transform: scale(1.05); }
    }
    .animate-glow {
      animation: glow 3s ease-in-out infinite;
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-33.33%); }
    }
    .animate-marquee {
      animation: marquee 40s linear infinite;
    }
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    @keyframes slide-left {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-left {
      animation: slide-left 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    @keyframes slide-right {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-right {
      animation: slide-right 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    @keyframes progress {
      from { width: 0; }
      to { width: 100%; }
    }
    .animate-progress {
      animation: progress 2s ease-out forwards;
    }
  `]
})
export class SlideShiftComponent {
  t = inject(TranslationService);
  readonly ArrowRight = ArrowRight;
  readonly Plus = Plus;
}
