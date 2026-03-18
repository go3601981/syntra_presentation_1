import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Calendar, Shuffle, Sparkles, Waves, Lightbulb } from 'lucide-angular';

@Component({
  selector: 'app-slide-limitations',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-12 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-orange-50/30 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-6">
          <h2 class="text-[10px] font-bold text-orange-600 uppercase tracking-[0.3em] mb-2">The Hybrid Approach</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Structure Meets Fluidity
          </h1>
          <div class="w-16 h-1 bg-orange-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <p class="text-lg text-gray-600 leading-relaxed font-light mb-4">
              We support <span class="text-orange-600 font-semibold">Organizer-Blocked Time</span> while removing the rigid friction of traditional top-down scheduling.
            </p>

            <div class="grid gap-3">
              @for (feature of hybridFeatures; track feature.title) {
                <div class="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all group">
                  <div class="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
                    <lucide-icon [name]="feature.icon" [size]="20"></lucide-icon>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-sm mb-0.5">{{ feature.title }}</h3>
                    <p class="text-[11px] text-gray-500 leading-snug">{{ feature.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <div class="relative">
            <div class="p-8 bg-[#1F2937] rounded-3xl shadow-2xl relative overflow-hidden border-t-4 border-orange-500">
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>
              
              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <lucide-icon [name]="Lightbulb" [size]="15" class="text-orange-400"></lucide-icon>
                  </div>
                  <h4 class="text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em]">The Vision</h4>
                </div>

                <p class="text-2xl md:text-3xl text-white font-light leading-tight mb-6">
                  "Give organizers the <span class="text-orange-400 font-medium italic">control</span> they need, and attendees the <span class="text-orange-400 font-medium italic">fluidity</span> they want."
                </p>

                <div class="pt-6 border-t border-white/10">
                  <p class="text-gray-400 text-xs leading-relaxed">
                    By allowing organizers to define networking blocks while enabling attendees to coordinate within them, we create a system that is both structured and spontaneous.
                  </p>
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
export class SlideLimitationsComponent {
  readonly Lightbulb = Lightbulb;
  readonly hybridFeatures = [
    { 
      title: 'Organizer-Blocked Time', 
      description: 'Support for predefined networking windows set by the event organizer.',
      icon: Calendar
    },
    { 
      title: 'Fluid Coordination', 
      description: 'Attendees can easily find and book slots within those blocks.',
      icon: Shuffle
    },
    { 
      title: 'Reduced Operational Burden', 
      description: 'Self-service scheduling reduces the need for manual matchmaking.',
      icon: Sparkles
    },
    { 
      title: 'Natural Flow', 
      description: 'Meetings adapt to the real-time rhythm of the event.',
      icon: Waves
    }
  ];
}
