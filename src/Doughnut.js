import { Bar,Line,Doughnut} from "react-chartjs-2";

export function Doughtnut(){

    return (
        <div className="doughnut-chart">
          <Doughnut
            data={{
              labels: ["Direct","Social","Referral"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [55, 35, 15],
                  backgroundColor: ["rgb(7, 167, 113)","rgb(9, 156, 144)","rgb(24, 109, 221)"],
                //   borderColor: [
                //     "rgba(255, 99, 132, 1)",
                //     "rgba(54, 162, 235, 1)",
                //     "rgba(255, 206, 86, 1)",
                //     "rgba(75, 192, 192, 1)",
                //     "rgba(153, 102, 255, 1)",
                //     "rgba(255, 159, 64, 1)",
                //   ],
                   circumference: 360,
                   spacing:0,
                   rotation:0,
                   weight:5,
                  //  borderWidth:2,
                   borderRadius:3,
                   cutout:"80%",
                   cutin:"50%",
                   borderAlign:"left",
    
                },
              ],
            }}
            height={400}
            width={400}
            options={{
              maintainAspectRatio: false,
            //   scales: {
            //     y: {
            //       beginAtZero: true,
            //     },
             // },
            }}
          />
        </div>
       
      );

}