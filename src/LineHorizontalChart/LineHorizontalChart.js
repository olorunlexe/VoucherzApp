import React,{Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';


class LineHorizontalChart extends Component{
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
                        100045,
                        445545,
                        803335,
                    ],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(255,94,332,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(72,192,192,0.6)',
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
            <div>
                <HorizontalBar
                    data={this.state.chartData} 
                    options={{
                    title:{
                        display:this.props.displayTitle,
                        text:'Payment Distribution',
                        fontSize:15,
                        fontWeight:'bold'
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                }}
                />
            </div>
        );
    }
}

export default LineHorizontalChart;