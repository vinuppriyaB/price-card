import { AreaChartGraph } from "./AreaChartGraph";
import {Doughtnut} from "./Doughnut";
import "./dashboard.css";
import {Progress} from "./Progress";
import { ColorBox } from "./ColorBox";
import { Detailbox } from "./Detailbox";

export function Dashboard(){
  return(
    <div className="dashboard-content">
      <div className="chart">
        <div className="areachart">
          <h3 className="heading">Earnings Overview</h3>
           <AreaChartGraph/>

        </div>
        <div className="nutchart">
          <h3 className="heading">Revenue Sources</h3>
          <Doughtnut/>
        </div>
      </div>
      <div >
      
          <Progress/>
      </div>
      <div >
      
      <ColorBox/>
  </div>
  <div>
  <Detailbox/>
  </div>
     
      

    </div>

  )
}