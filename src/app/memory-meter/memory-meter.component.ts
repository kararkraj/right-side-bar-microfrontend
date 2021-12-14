import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-memory-meter',
  templateUrl: './memory-meter.component.html',
  styleUrls: ['./memory-meter.component.scss']
})
export class MemoryMeterComponent implements OnInit, AfterViewInit, OnChanges {

  memoryChartOption: EChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: {
      title: {
        fontSize: 10,
        fontWeight: 'bold'
      },
      axisLabel: {
        fontSize: 8
      },
      name: 'RAM Usage',
      type: 'gauge',
      progress: {
        show: true
      },
      detail: {
        valueAnimation: true,
        formatter: '{value} %',
        fontSize: 12
      },
      data: [
        {
          value: 50,
          name: 'RAM'
        }
      ]
    }
  };
  cpuChartOption: EChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: {
      axisLabel: {
        fontSize: 8
      },
      title: {
        fontSize: 10,
        fontWeight: 'bold'
      },
      name: 'CPU Usage',
      type: 'gauge',
      progress: {
        show: true
      },
      detail: {
        valueAnimation: true,
        formatter: '{value} %',
        fontSize: 12
      },
      data: [
        {
          value: 50,
          name: 'CPU'
        }
      ],
    }
  };
  memoryMergeOptions: any;
  cpuMergeOptions: any;

  constructor() { }

  ngOnChanges(change: SimpleChanges) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    window.onmessage = (data: MessageEvent) => {
      if (data.data.cpu >= 0) {        
        this.updateCPUMeter(data.data.cpu);
        this.updateMemoryMeter(data.data.ram);
      } else {
        this.updateCPUMeter(50);
        this.updateMemoryMeter(50);
      }
    };
  }

  updateMemoryMeter(percentRAMUsage: number) {
    this.memoryMergeOptions = {
      series: {
        data: [
          {
            value: percentRAMUsage,
            name: 'RAM'
          }
        ]
      }
    };
  }

  updateCPUMeter(CPUUsage: number) {
    this.cpuMergeOptions = {
      series: {
        data: [
          {
            value: CPUUsage,
            name: 'CPU'
          }
        ]
      }
    };
  }

}
