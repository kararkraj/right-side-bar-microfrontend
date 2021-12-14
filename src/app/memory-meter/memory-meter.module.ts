import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryMeterComponent } from './memory-meter.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent } from 'echarts/components';
import { GaugeChart } from "echarts/charts";

echarts.use([GaugeChart, TooltipComponent, CanvasRenderer]);

@NgModule({
  declarations: [
    MemoryMeterComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
  ],
  exports: [MemoryMeterComponent]
})
export class MemoryMeterModule { }
