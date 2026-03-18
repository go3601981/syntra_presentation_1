import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Rocket, Sparkles, Check } from 'lucide-angular';

@Component({
  selector: 'app-slide-v1-scope',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-12 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-xs font-bold text-indigo-600 uppercase tracking-[0.3em] mb-4">Roadmap</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Recommended V1 Implementation
          </h1>
          <div class="w-20 h-1 bg-indigo-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- V1 Scope -->
          <div class="bg-white p-8 rounded-[32px] border border-indigo-100 shadow-xl shadow-indigo-500/5 relative overflow-hidden group hover:border-indigo-300 transition-all">
            <div class="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1.5 rounded-bl-2xl text-[9px] font-bold uppercase tracking-widest">
              Phase 1
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <lucide-icon name="rocket" [size]="11" class="text-indigo-600 transition-colors group-hover:text-[#00FF9D]"></lucide-icon>
              V1 Core Scope
            </h3>
            
            <div class="space-y-4">
              @for (item of v1Items; track item.title) {
                <div class="flex items-start gap-3 group/item">
                  <div class="w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                    <lucide-icon name="check" [size]="15" class="transition-colors group-hover/item:text-[#00FF9D]"></lucide-icon>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-xs">{{ item.title }}</h4>
                    <p class="text-[10px] text-gray-500 leading-relaxed">{{ item.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Future Evolution -->
          <div class="bg-slate-900 p-8 rounded-[32px] text-white relative overflow-hidden group hover:border-emerald-500/30 border border-transparent transition-all">
            <div class="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1.5 rounded-bl-2xl text-[9px] font-bold uppercase tracking-widest">
              Future
            </div>

            <h3 class="text-xl font-bold mb-6 flex items-center gap-3">
              <lucide-icon name="sparkles" [size]="11" class="text-emerald-400 transition-colors group-hover:text-[#00FF9D]"></lucide-icon>
              Future Evolution
            </h3>

            <div class="space-y-6">
              @for (item of futureItems; track item.title) {
                <div class="relative pl-6 border-l border-white/10">
                  <div class="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8_rgba(52,211,153,0.5)]"></div>
                  <h4 class="font-bold text-emerald-400 text-xs mb-0.5">{{ item.title }}</h4>
                  <p class="text-[10px] text-gray-400 leading-relaxed">{{ item.description }}</p>
                </div>
              }
            </div>

            <div class="mt-8 pt-6 border-t border-white/10">
              <p class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-1">Strategic Goal</p>
              <p class="text-xs font-light italic text-gray-300">
                Evolving from a scheduling tool into an intelligent networking ecosystem.
              </p>
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
export class SlideV1ScopeComponent {
  readonly v1Items = [
    { 
      title: 'Hybrid Availability', 
      description: 'Organizer-blocked windows + Attendee fluid slots.' 
    },
    { 
      title: 'Proactive Prompts', 
      description: 'Intelligent "Free Window" notifications with one-tap recommendations.' 
    },
    { 
      title: 'Welcome Chat Modal', 
      description: 'Immediate engagement prompt upon first app entry to kickstart networking.' 
    },
    { 
      title: 'Matchmaking v1', 
      description: 'Recommendations based on shared interests, goals, and session attendance.' 
    },
    { 
      title: 'Trust & Safety', 
      description: 'Opt-in networking, mutual consent, and request rate limiting.' 
    }
  ];

  readonly futureItems = [
    { 
      title: 'Advanced AI Matchmaking', 
      description: 'Deep behavioral analysis and real-time interest matching.' 
    },
    { 
      title: 'Group Meeting Coordination', 
      description: 'Facilitating small group discussions and topical meetups.' 
    },
    { 
      title: 'Networking Analytics', 
      description: 'Deep insights for organizers on connection quality and engagement.' 
    }
  ];
}
