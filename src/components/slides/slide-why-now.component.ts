import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-why-now',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center items-center relative overflow-hidden bg-syntra-bg-page px-6 py-12">
      
      <!-- Background Grid -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style="background-image: radial-gradient(#00FF9D 1px, transparent 1px); background-size: 40px 40px;"></div>

      <div class="relative z-10 w-full max-w-6xl">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <span class="inline-block px-4 py-1 rounded-full bg-syntra-action-primary/10 text-syntra-action-primary text-xs font-bold tracking-widest uppercase mb-4">
            {{ t.translate('slide8.urgency_label') }}
          </span>
          <h2 class="text-4xl md:text-6xl font-bold text-syntra-text-primary tracking-tight mb-6">
            {{ t.translate('slide8.main_text') }}
          </h2>
        </div>

        <!-- Timeline Container -->
        <div class="relative mt-20">
          <!-- Central Timeline Line -->
          <div class="absolute left-1/2 top-0 bottom-0 w-px bg-syntra-border-default -translate-x-1/2 hidden md:block"></div>
          
          <!-- Timeline Nodes -->
          <div class="space-y-24 md:space-y-0 relative">
            
            <!-- Past (Left) -->
            <div class="flex flex-col md:flex-row items-center md:items-start">
              <div class="md:w-1/2 md:pr-16 text-center md:text-right animate-slide-left">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-syntra-bg-card border border-syntra-border-default mb-6 md:ml-auto">
                  <mat-icon class="text-syntra-text-muted text-3xl">history</mat-icon>
                </div>
                <h3 class="text-2xl font-bold text-syntra-text-primary mb-4">
                  {{ t.translate('slide8.past_label') }}
                </h3>
                <p class="text-syntra-text-muted text-lg leading-relaxed max-w-md md:ml-auto">
                  {{ t.translate('slide8.past_desc') }}
                </p>
              </div>
              
              <!-- Timeline Point -->
              <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-syntra-border-default border-4 border-syntra-bg-page z-20"></div>
              
              <div class="md:w-1/2"></div>
            </div>

            <!-- Future (Right) -->
            <div class="flex flex-col md:flex-row items-center md:items-start mt-16 md:mt-32">
              <div class="md:w-1/2"></div>
              
              <!-- Timeline Point -->
              <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-syntra-action-primary border-4 border-syntra-bg-page z-20 shadow-[0_0_15px_rgba(0,255,157,0.5)]"></div>

              <div class="md:w-1/2 md:pl-16 text-center md:text-left animate-slide-right">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-syntra-action-primary text-white mb-6">
                  <mat-icon class="text-3xl">bolt</mat-icon>
                </div>
                <h3 class="text-2xl font-bold text-syntra-text-primary mb-4">
                  {{ t.translate('slide8.future_label') }}
                </h3>
                <p class="text-syntra-text-muted text-lg leading-relaxed max-w-md">
                  {{ t.translate('slide8.future_desc') }}
                </p>
                
                <!-- Speed Indicator -->
                <div class="mt-8 flex items-center gap-4 justify-center md:justify-start">
                  <div class="h-1 w-32 bg-syntra-border-default rounded-full overflow-hidden">
                    <div class="h-full bg-syntra-action-primary animate-speed-bar"></div>
                  </div>
                  <span class="text-syntra-action-primary font-bold text-sm tracking-tighter">10X FASTER</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 1s ease-out forwards;
    }

    @keyframes slide-left {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-left {
      animation: slide-left 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      animation-delay: 0.5s;
      opacity: 0;
    }

    @keyframes slide-right {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-right {
      animation: slide-right 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      animation-delay: 1s;
      opacity: 0;
    }

    @keyframes speed-bar {
      from { width: 0; }
      to { width: 100%; }
    }
    .animate-speed-bar {
      animation: speed-bar 2s ease-out forwards;
      animation-delay: 1.5s;
    }
  `]
})
export class SlideWhyNowComponent {
  t = inject(TranslationService);
}
