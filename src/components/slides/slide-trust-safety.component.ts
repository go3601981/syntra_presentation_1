import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ShieldCheck, Handshake, Gauge, Shield } from 'lucide-angular';

@Component({
  selector: 'app-slide-trust-safety',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-12 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-1/2 right-0 w-96 h-96 bg-emerald-50/30 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.3em] mb-2">Trust & Safety</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Reducing Networking Friction
          </h1>
          <div class="w-16 h-1 bg-emerald-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="space-y-6">
            <p class="text-lg text-gray-600 leading-relaxed font-light">
              Open networking can lead to spam and fatigue. We implement <span class="text-emerald-600 font-semibold">intelligent guardrails</span> to ensure every connection is high-quality and respectful.
            </p>

            <div class="space-y-4">
              @for (feature of safetyFeatures; track feature.title) {
                <div class="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-emerald-200 transition-all">
                  <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <lucide-icon [name]="feature.icon" [size]="22" class="transition-colors group-hover:text-[#00FF9D]"></lucide-icon>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-sm mb-1">{{ feature.title }}</h3>
                    <p class="text-[11px] text-gray-500 leading-relaxed">{{ feature.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <div class="relative">
            <div class="p-8 bg-slate-900 rounded-[32px] shadow-2xl relative overflow-hidden border-t-4 border-emerald-500">
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
              
              <div class="relative z-10">
                <h4 class="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">The Golden Rule</h4>
                <p class="text-2xl md:text-3xl text-white font-light leading-tight italic mb-8">
                  "Networking should be <span class="text-emerald-400 font-medium">opt-in</span>, not forced. Users control their own availability and boundaries."
                </p>

                <div class="grid grid-cols-2 gap-4">
                  <div class="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p class="text-emerald-400 font-bold text-xl mb-1">100%</p>
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest leading-tight">Mutual Consent Required</p>
                  </div>
                  <div class="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p class="text-emerald-400 font-bold text-xl mb-1">Smart</p>
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest leading-tight">Request Rate Limiting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class SlideTrustSafetyComponent {
  readonly safetyFeatures = [
    { 
      title: 'Opt-in Networking', 
      description: 'Attendees must explicitly choose to be "Available for Meetings" in their profile settings.',
      icon: 'shield-check'
    },
    { 
      title: 'Mutual Consent', 
      description: 'A meeting is only confirmed and added to the calendar once both parties have accepted.',
      icon: 'handshake'
    },
    { 
      title: 'Request Rate Limiting', 
      description: 'Prevents spam by limiting the number of pending meeting requests a user can send.',
      icon: 'gauge'
    },
    { 
      title: 'Privacy Controls', 
      description: 'Users can block specific participants or report inappropriate behavior directly from the chat.',
      icon: 'shield'
    }
  ];
}
