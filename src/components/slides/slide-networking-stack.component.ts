import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, UserSearch, MessageSquare, CalendarCheck, Sparkles, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-slide-networking-stack',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-5xl mx-auto px-6 py-12 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-3xl -z-10"></div>
      
      <div class="relative z-10">
        <div class="mb-6 text-center">
          <h2 class="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em] mb-1">Architecture</h2>
          <h1 class="text-2xl md:text-3xl font-bold text-[#1F2937] leading-tight mb-3">
            The Syntra Advisory Networking Stack
          </h1>
          <div class="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p class="mt-3 text-gray-500 max-w-2xl mx-auto text-xs">
            A layered system that progressively turns discovery into real, high-value meetings.
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-2 relative">
          <!-- Connection Arrow -->
          <div class="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-violet-200 -z-10 hidden md:block"></div>

          <!-- Layer 1: Discovery -->
          <div class="bg-white rounded-2xl border border-blue-100 shadow-sm p-4 relative group hover:border-blue-300 transition-all">
            <div class="flex flex-col md:flex-row md:items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                <lucide-icon [name]=\"UserSearch\" [size]=\"26\"></lucide-icon>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-[9px] font-bold text-blue-600 uppercase tracking-widest">Layer 1</span>
                  <h3 class="text-base font-bold text-gray-900">Discovery Layer: Participant List</h3>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed">
                  Where attendees discover others. Browse <span class="font-semibold">attendees, exhibitors, and organizers</span> to find relevant connections.
                </p>
              </div>
              <div class="hidden md:flex gap-2">
                <span class="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold rounded-md border border-blue-100 uppercase">Browse</span>
              </div>
            </div>
          </div>

          <!-- Layer 2: Interaction -->
          <div class="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 relative group hover:border-indigo-300 transition-all">
            <div class="flex flex-col md:flex-row md:items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200">
                <lucide-icon [name]=\"MessageSquare\" [size]=\"26\"></lucide-icon>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-[9px] font-bold text-indigo-600 uppercase tracking-widest">Layer 2</span>
                  <h3 class="text-base font-bold text-gray-900">Interaction Layer: Profiles & Chat</h3>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed">
                  Learn about each other through <span class="font-semibold">detailed profiles</span> and initiate <span class="font-semibold">chat conversations</span> to build initial rapport.
                </p>
              </div>
              <div class="hidden md:flex gap-2">
                <span class="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[9px] font-bold rounded-md border border-indigo-100 uppercase">Chat</span>
              </div>
            </div>
          </div>

          <!-- Layer 3: Coordination -->
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 relative group hover:border-emerald-300 transition-all">
            <div class="flex flex-col md:flex-row md:items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-200">
                <lucide-icon [name]=\"CalendarCheck\" [size]=\"26\"></lucide-icon>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Layer 3</span>
                  <h3 class="text-base font-bold text-gray-900">Coordination Layer: Meeting Coordination</h3>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed">
                  Convert connections into <span class="font-semibold">real meetings</span>. The platform facilitates the "how" without dictating the "when".
                </p>
              </div>
              <div class="hidden md:flex gap-2">
                <span class="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-bold rounded-md border border-emerald-100 uppercase">Schedule</span>
              </div>
            </div>
          </div>

          <!-- Layer 4: Intelligence -->
          <div class="bg-slate-900 rounded-2xl shadow-xl p-4 relative group border-t-2 border-violet-500">
            <div class="flex flex-col md:flex-row md:items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-violet-900/50">
                <lucide-icon [name]=\"Sparkles\" [size]=\"26\"></lucide-icon>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-[9px] font-bold text-violet-400 uppercase tracking-widest">Layer 4 (Future)</span>
                  <h3 class="text-base font-bold text-white">Intelligence Layer: Matchmaking</h3>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Proactive <span class="text-violet-300 font-semibold">recommendations</span> based on behavior, suggesting valuable connections before the user even searches.
                </p>
              </div>
              <div class="hidden md:flex gap-2">
                <span class="px-2 py-0.5 bg-white/10 text-violet-300 text-[9px] font-bold rounded-md border border-white/10 uppercase italic">AI Driven</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center gap-4">
          <div class="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            <span>Discovery</span>
            <lucide-icon [name]="ArrowRight" [size]="6"></lucide-icon>
            <span>Interaction</span>
            <lucide-icon [name]="ArrowRight" [size]="6"></lucide-icon>
            <span>Coordination</span>
            <lucide-icon [name]="ArrowRight" [size]="6"></lucide-icon>
            <span class="text-blue-600">Intelligent Recommendations</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class SlideNetworkingStackComponent {
  readonly UserSearch = UserSearch;
  readonly MessageSquare = MessageSquare;
  readonly CalendarCheck = CalendarCheck;
  readonly Sparkles = Sparkles;
  readonly ArrowRight = ArrowRight;
}
