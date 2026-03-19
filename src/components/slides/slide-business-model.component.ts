import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, PieChart, Globe, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'app-slide-business-model',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-dark px-6 pt-8 pb-24">
      
      <!-- Background Neural Network SVG -->
      <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <circle cx="500" cy="500" r="450" stroke="#3EFFC4" stroke-width="0.2" fill="none" class="animate-spin-slow" />
          <circle cx="500" cy="500" r="350" stroke="#3EFFC4" stroke-width="0.2" fill="none" class="animate-spin-slow-reverse" />
        </svg>
      </div>

      <!-- Digital Noise Overlay -->
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-noise"></div>

      <div class="relative z-10 w-full max-w-7xl">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <div class="inline-block px-3 py-1 border border-syntra-action-primary/30 rounded text-[10px] font-bold tracking-[0.4em] text-syntra-action-primary uppercase mb-4">
            {{ t.translate('slide12.architecture_label') }}
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            {{ t.translate('slide12.title') }}
          </h2>
          <div class="mt-6 w-24 h-1 bg-syntra-action-primary mx-auto rounded-full shadow-[0_0_15px_#3EFFC4]"></div>
        </div>

        <!-- Model Grid (Bento Style) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Revenue Sharing -->
          <div class="group relative p-8 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-syntra-action-primary/50 transition-all duration-700 animate-fade-in-up flex flex-col items-center text-center overflow-hidden" style="animation-delay: 0.2s">
            <div class="absolute -top-20 -left-20 w-40 h-40 bg-syntra-action-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div class="w-24 h-24 mb-8 relative flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-syntra-action-primary transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(62,255,196,0.4)]">
              <lucide-icon name="pie-chart" [size]="44" class="text-white/20 group-hover:text-syntra-bg-dark transition-colors duration-500"></lucide-icon>
            </div>
            <h3 class="text-2xl font-black text-white mb-4 group-hover:text-syntra-action-primary transition-colors duration-500 tracking-tight uppercase">
              {{ t.translate('slide12.item1_title') }}
            </h3>
            <p class="text-white/60 leading-relaxed text-lg font-light">
              {{ t.translate('slide12.item1_desc') }}
            </p>
          </div>

          <!-- Territory Model -->
          <div class="group relative p-8 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-syntra-action-primary/50 transition-all duration-700 animate-fade-in-up flex flex-col items-center text-center overflow-hidden" style="animation-delay: 0.4s">
            <div class="absolute -top-20 -left-20 w-40 h-40 bg-syntra-action-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div class="w-24 h-24 mb-8 relative flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-syntra-action-primary transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(62,255,196,0.4)]">
              <lucide-icon name="globe" [size]="44" class="text-white/20 group-hover:text-syntra-bg-dark transition-colors duration-500"></lucide-icon>
            </div>
            <h3 class="text-2xl font-black text-white mb-4 group-hover:text-syntra-action-primary transition-colors duration-500 tracking-tight uppercase">
              {{ t.translate('slide12.item2_title') }}
            </h3>
            <p class="text-white/60 leading-relaxed text-lg font-light">
              {{ t.translate('slide12.item2_desc') }}
            </p>
          </div>

          <!-- Growth Incentives -->
          <div class="group relative p-8 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:border-syntra-action-primary/50 transition-all duration-700 animate-fade-in-up flex flex-col items-center text-center overflow-hidden" style="animation-delay: 0.6s">
            <div class="absolute -top-20 -left-20 w-40 h-40 bg-syntra-action-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div class="w-24 h-24 mb-8 relative flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-syntra-action-primary transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(62,255,196,0.4)]">
              <lucide-icon name="trending-up" [size]="44" class="text-white/20 group-hover:text-syntra-bg-dark transition-colors duration-500"></lucide-icon>
            </div>
            <h3 class="text-2xl font-black text-white mb-4 group-hover:text-syntra-action-primary transition-colors duration-500 tracking-tight uppercase">
              {{ t.translate('slide12.item3_title') }}
            </h3>
            <p class="text-white/60 leading-relaxed text-lg font-light">
              {{ t.translate('slide12.item3_desc') }}
            </p>
          </div>

        </div>

        <!-- Professional Note -->
        <div class="mt-16 pt-8 border-t border-white/10 text-center animate-fade-in" style="animation-delay: 1s">
          <p class="text-[10px] text-white/30 uppercase tracking-[0.5em] font-bold">
            {{ t.translate('slide12.subtitle') }}
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

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      opacity: 0;
      animation: fade-in-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes draw-circle {
      from { stroke-dashoffset: 282; }
      to { stroke-dashoffset: 70; }
    }
    .animate-draw-circle {
      animation: draw-circle 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: 0.8s;
    }

    .animate-spin-slow {
      animation: spin 30s linear infinite;
    }
    .animate-spin-slow-reverse {
      animation: spin 40s linear infinite reverse;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 3s ease-in-out infinite;
    }
  `]
})
export class SlideBusinessModelComponent {
  t = inject(TranslationService);
  readonly PieChart = PieChart;
  readonly Globe = Globe;
  readonly TrendingUp = TrendingUp;
}
