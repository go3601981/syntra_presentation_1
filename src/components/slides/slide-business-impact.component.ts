import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Handshake, TrendingUp, CheckCircle, Pointer } from 'lucide-angular';

@Component({
  selector: 'app-slide-business-impact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-12 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-xs font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4">The Bottom Line</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Business Impact for Event Organizers
          </h1>
          <div class="w-20 h-1 bg-emerald-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            @for (benefit of benefits; track benefit.title) {
              <div class="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-emerald-200 transition-all duration-500 group">
                <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <lucide-icon [name]="benefit.icon" [size]="26"></lucide-icon>
                </div>
                <h3 class="font-bold text-gray-900 mb-1 text-sm group-hover:text-emerald-600 transition-colors">{{ benefit.title }}</h3>
                <p class="text-xs text-gray-500 leading-relaxed">{{ benefit.description }}</p>
              </div>
            }
          </div>

          <div class="space-y-6 lg:pl-8">
            <div class="p-8 bg-gray-900 rounded-[32px] text-white relative overflow-hidden">
              <!-- Decorative circles -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16"></div>
              
              <h4 class="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">The Core Value</h4>
              <p class="text-xl md:text-2xl font-light leading-snug mb-6">
                "Events become <span class="text-emerald-400 font-bold italic text-2xl md:text-3xl">more valuable</span> when people actually meet each other."
              </p>
              
              <div class="flex items-center gap-3 pt-6 border-t border-white/10">
                <div class="flex -space-x-2">
                  <div class="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-200"></div>
                  <div class="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-300"></div>
                  <div class="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-400"></div>
                </div>
                <p class="text-[10px] text-gray-400 font-medium">Driving ROI for thousands of attendees</p>
              </div>
            </div>

            <p class="text-sm text-gray-600 font-light leading-relaxed">
              By facilitating meaningful connections, Syntra Advisory transforms from a simple logistics tool into a <span class="text-emerald-600 font-semibold">strategic networking engine</span> that increases event retention and exhibitor satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class SlideBusinessImpactComponent {
  readonly benefits = [
    { 
      title: 'Meaningful Connections', 
      icon: Handshake, 
      description: 'Moving beyond badge scans to actual professional relationships.' 
    },
    { 
      title: 'Exhibitor ROI', 
      icon: TrendingUp, 
      description: 'Increased interactions leading to higher quality leads and satisfaction.' 
    },
    { 
      title: 'Stronger Outcomes', 
      icon: CheckCircle, 
      description: 'Measurable networking success that justifies event attendance.' 
    },
    { 
      title: 'App Engagement', 
      icon: Pointer, 
      description: 'Higher daily active users as the app becomes central to the event experience.' 
    }
  ];
}
