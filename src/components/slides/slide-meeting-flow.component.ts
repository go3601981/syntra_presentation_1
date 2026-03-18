import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, UserSearch, Sparkles, Clock, Brain } from 'lucide-angular';

@Component({
  selector: 'app-slide-meeting-flow',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-12 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-1/2 right-0 w-96 h-96 bg-violet-50/50 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-xs font-bold text-violet-600 uppercase tracking-[0.3em] mb-4">The Experience</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Dual Coordination Flows
          </h1>
          <div class="w-20 h-1 bg-violet-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Flow 1: Person-First -->
          <div class="p-6 bg-white rounded-[32px] border border-gray-100 shadow-sm">
            <h3 class="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-6 flex items-center gap-2">
              <lucide-icon [name]="UserSearch" [size]="8"></lucide-icon>
              Flow A: Person-First (Discovery)
            </h3>
            <div class="space-y-4">
              @for (step of personFlow; track step.title; let i = $index) {
                <div class="flex items-center gap-4">
                  <div class="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center text-[10px] font-bold shrink-0">
                    {{ i + 1 }}
                  </div>
                  <div class="flex-1 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <p class="text-[11px] font-bold text-gray-900">{{ step.title }}</p>
                    <p class="text-[9px] text-gray-500">{{ step.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Flow 2: Time-First -->
          <div class="p-6 bg-violet-900 rounded-[32px] shadow-xl text-white relative overflow-hidden">
            <div class="absolute top-0 right-0 p-6">
              <lucide-icon [name]="Sparkles" [size]="22" class="text-violet-400 opacity-20"></lucide-icon>
            </div>
            
            <h3 class="text-[10px] font-bold text-violet-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <lucide-icon [name]="Clock" [size]="8"></lucide-icon>
              Flow B: Time-First (Disney-Style)
            </h3>
            <div class="space-y-4">
              @for (step of timeFlow; track step.title; let i = $index) {
                <div class="flex items-center gap-4">
                  <div class="w-8 h-8 rounded-lg bg-white/10 text-violet-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                    {{ i + 1 }}
                  </div>
                  <div class="flex-1 p-3 bg-white/5 rounded-xl border border-white/10">
                    <p class="text-[11px] font-bold text-white">{{ step.title }}</p>
                    <p class="text-[9px] text-violet-200">{{ step.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="mt-10 p-6 bg-violet-50 rounded-3xl border border-violet-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <div class=\"w-12 h-12 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-lg\">
              <lucide-icon [name]=\"Brain\" [size]=\"26\"></lucide-icon>
            </div>
            <div>
              <h4 class="text-[10px] font-bold text-violet-600 uppercase tracking-widest">The Intelligence</h4>
              <p class="text-lg font-bold text-gray-900">Fluid and Proactive</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 max-w-md text-center md:text-right font-light italic">
            "Whether starting from a <span class="text-violet-600 font-medium">person</span> or a <span class="text-violet-600 font-medium">free slot</span>, the app intelligently bridges the gap."
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class SlideMeetingFlowComponent {
  readonly UserSearch = UserSearch;
  readonly Sparkles = Sparkles;
  readonly Clock = Clock;
  readonly Brain = Brain;

  readonly personFlow = [
    { title: 'Discover Person', description: 'Find someone in the participant list' },
    { title: 'Initiate Chat', description: 'Break the ice with a quick message' },
    { title: 'Propose Meeting', description: 'Suggest a formal 1-on-1 sync' }
  ];

  readonly timeFlow = [
    { title: 'Select Free Slot', description: 'Pick a 15min window in your schedule' },
    { title: 'Get Recommendations', description: 'App proposes relevant people available' },
    { title: 'One-Tap Invite', description: 'Instantly send a meeting request' }
  ];
}
