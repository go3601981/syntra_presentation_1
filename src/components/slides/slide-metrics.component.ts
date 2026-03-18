import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Network, TrendingUp, Smile } from 'lucide-angular';

@Component({
  selector: 'app-slide-metrics',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-8 lg:py-2 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-6">
          <h2 class="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-2">ROI & Impact</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Measuring Networking Success
          </h1>
          <div class="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          @for (metric of metrics; track metric.title) {
            <div class="p-6 bg-white rounded-[24px] border border-gray-100 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-all">
              <div class="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 group-hover:bg-blue-600/10 transition-colors"></div>
              
              <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <lucide-icon [name]=\"metric.icon\" [size]=\"26\"></lucide-icon>
              </div>
              
              <h3 class="text-base font-bold text-gray-900 mb-1">{{ metric.title }}</h3>
              <p class="text-[10px] text-gray-500 leading-relaxed mb-4">{{ metric.description }}</p>
              
              <div class="pt-4 border-t border-gray-100">
                <p class="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-1">Target Outcome</p>
                <p class="text-xs font-medium text-gray-900">{{ metric.outcome }}</p>
              </div>
            </div>
          }
        </div>

        <div class="mt-6 p-6 bg-slate-900 rounded-[24px] text-white relative overflow-hidden">
          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="max-w-xl">
              <h4 class="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">The Strategic Advantage</h4>
              <p class="text-xl font-light leading-relaxed">
                By providing these metrics, Syntra Advisory transforms from a logistics tool into a <span class="text-blue-400 font-bold italic">strategic networking engine</span> that proves event value to stakeholders.
              </p>
            </div>
            <div class="flex gap-4">
              <div class="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p class="text-blue-400 font-bold text-2xl mb-1">80%</p>
                <p class="text-[9px] text-gray-400 uppercase tracking-widest">Attendee Goal</p>
              </div>
              <div class="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p class="text-blue-400 font-bold text-2xl mb-1">ROI</p>
                <p class="text-[9px] text-gray-400 uppercase tracking-widest">Proven Value</p>
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
export class SlideMetricsComponent {
  readonly metrics = [
    { 
      title: 'Meeting Density', 
      icon: Network,
      description: 'Total meetings requested vs. meetings completed across the event.',
      outcome: 'High engagement and successful coordination.'
    },
    { 
      title: 'Engagement Lift', 
      icon: TrendingUp,
      description: 'Increase in Daily Active Users (DAU) as the app becomes a coordination tool.',
      outcome: 'App becomes central to the event experience.'
    },
    { 
      title: 'Post-Event Sentiment', 
      icon: Smile,
      description: 'NPS scores specifically related to "Networking Quality" and connections made.',
      outcome: 'Justifies future attendance and sponsorship.'
    }
  ];
}
