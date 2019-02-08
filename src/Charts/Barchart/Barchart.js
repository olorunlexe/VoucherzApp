import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';


class ChartGraph extends Component{
    state ={
        chartData:{
            labels:['Jan','Feb','March','April','May','June','July'],
            datasets:[
                {
                    label:'no. of redemption',
                    data:[
                        617594,
                        181045,
                        345645,
                        345645,
                        400045,
                        745545,
                        203335,
                    ],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(255,94,332,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(62,192,198,0.6)',
                        'rgba(255,159,64,0.6)',
                        'rgba(255,99,132,0.6)',
                    ]
                }
            ]
        }
    }

    static defaultProps={
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
    }
    render(){
        return(
            <div className="chart">
            <Bar 
                data={this.state.chartData} 
                options={{
                title:{
                    display:this.props.displayTitle,
                    text:'Vouchers Redeemed',
                    fontSize:15,
                    fontWeight:'bold'
                },
                legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                }
            }}/>
            </div>
        );
    }
} 

export default ChartGraph;