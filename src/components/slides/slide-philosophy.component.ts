import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ShieldCheck, UserPlus, Lightbulb, Brain, MousePointer2, Wand2 } from 'lucide-angular';

@Component({
  selector: 'app-slide-philosophy',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-12 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-2">The Philosophy</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Intelligent Meeting Coordination
          </h1>
          <div class="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="space-y-6">
            <div class="p-6 bg-blue-600 rounded-3xl shadow-xl text-white relative overflow-hidden">
              <div class="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h3 class="text-lg font-light leading-relaxed italic mb-4">
                "We don't just provide tools; we <span class="font-bold">proactively guide</span> attendees to the right connections at the right time."
              </h3>
              <div class="flex items-center gap-2 text-blue-100 text-xs font-medium">
                <lucide-icon name="shield-check" [size]="6" class="text-white/40 hover:text-[#00FF9D] transition-colors"></lucide-icon>
                <span>The Syntra Advisory Way</span>
              </div>
            </div>

            <div class="space-y-3">
              <p class="text-base text-gray-600 leading-relaxed">
                By combining <span class="text-blue-600 font-semibold">attendee agency</span> with <span class="text-blue-600 font-semibold">intelligent prompts</span>, we ensure that networking is both simple to do and impossible to miss.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            @for (pillar of pillars; track pillar.label) {
              <div class="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                  <lucide-icon [name]="pillar.icon" [size]="22" class="text-gray-400 group-hover:text-[#00FF9D] transition-colors"></lucide-icon>
                </div>
                <h4 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{{ pillar.label }}</h4>
                <p class="text-base font-bold text-gray-900">{{ pillar.text }}</p>
              </div>
            }
          </div>
        </div>

        <div class="mt-10 p-5 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col md:flex-row items-center gap-4 group">
          <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
            <lucide-icon name="wand-2" [size]="22" class="text-gray-400 group-hover:text-[#00FF9D] transition-colors"></lucide-icon>
          </div>
          <p class="text-gray-600 text-sm text-center md:text-left">
            We "spoon-feed" high-value recommendations during free windows, making it <span class="font-semibold text-gray-900">effortless</span> for even the most hesitant attendees to network.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class SlidePhilosophyComponent {
  readonly pillars = [
    { label: 'Agency', text: 'Attendee-led', icon: 'user-plus' },
    { label: 'Guidance', text: 'Proactive prompts', icon: 'lightbulb' },
    { label: 'Intelligence', text: 'Smart matching', icon: 'brain' },
    { label: 'Simplicity', text: 'One-tap booking', icon: 'mouse-pointer-2' }
  ];
}
