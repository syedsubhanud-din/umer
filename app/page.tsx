'use client';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import FolderIcon from '@mui/icons-material/Folder';
import Image from 'next/image';
import { Button } from '@mui/material';
import {  BarChart, PieChart } from '@mui/x-charts';
import React from 'react';

import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import ReactApexChart from 'react-apexcharts';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
  import { grey } from '@mui/material/colors';
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),  
  textAlign: 'left',
  color: '#2D3748', // Dark gray font color
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center', // Center vertically
}));

const IconContainer = styled('div')({
  backgroundColor: '#F4F7FE',
  borderRadius: '50%',
  padding: '10px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '20px', // Added margin for space between icon and text
});

const data = [
  { label: 'Earnings', value: '$350.4', icon: <BarChartIcon color='primary' fontSize='large'/> },
  { label: 'Spend this month', value: '$642.39', icon: <AttachMoneyIcon color='primary'/> },
  { label: 'Sales', value: '$574.34', extra: '+23% since last month' },
  { label: 'Your balance', value: '$1,000', image: '/usaflag.png' },
  { label: 'New Tasks', value: '154', icon: <AssignmentTurnedInIcon color='primary'/> },
  { label: 'Total Projects', value: '2935', icon: <FolderIcon/>,  },
];

const containerStyle = {
  marginTop:"80px",
      backgroundColor:"#EDF1FA",/* Semi-transparent background */
  width: '100%', // Full width
  minHeight: '100vh', // Full viewport height
  display: 'flex',
  justifyContent: 'center',
  marginRight: 0,
};

interface LineData {
  name: string;
  value: number;
}

interface BarData {
  name: string;
  value: number;
}

interface PieData {
  name: string;
  value: number;
}

const lineData: LineData[] = [
  { name: 'Sep', value: 30000 },
  { name: 'Oct', value: 32000 },
  { name: 'Nov', value: 31000 },
  { name: 'Jan', value: 34000 },
  { name: 'Feb', value: 37000 },
];



const pointyBarPlugin = {
  id: 'pointyBarPlugin',
  afterDatasetsDraw(chart, args, options) {
    const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      meta.data.forEach((bar, index) => {
        const { x, y, base } = bar;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x - bar.width / 2, y);
        ctx.lineTo(x, y - 10); // Make the bar pointy
        ctx.lineTo(x + bar.width / 2, y);
        ctx.lineTo(x + bar.width / 2, base);
        ctx.lineTo(x - bar.width / 2, base);
        ctx.closePath();
        ctx.fillStyle = dataset.backgroundColor;
        ctx.fill();
        ctx.restore();
      });
    });
  },
};

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const databarchart = {
  labels: ['17', '18', '19', '20', '21', '22', '23', '24', '25'],
  datasets: [
    {
      label: 'PRODUCT A',
      data: [400, 370,330, 390, 320, 350, 360, 320, 380],
      backgroundColor: '#7655FF ',
      barThickness: 12, // Set the bar thickness
      
    },
    {
      label: 'PRODUCT B',
      data: [400, 370,330, 390, 320, 350, 360, 320,380],
      backgroundColor: '#80D9FF',
      barThickness: 12, // Set the bar thickness
      
    },
    {
      label: 'PRODUCT C',
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
      backgroundColor: '#E5ECF9',
      barThickness: 12,
      

    },
  ],
};

const options = {
  scaleLineColor: "rgba(0,0,0,0)",
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      
      },
      categoryPercentage: 0.5, // Adjust this value for spacing between categories
      border:{
        display:false,
      }
    },
    y: {
      max: 2000   , // Increase the Y-axis limit
      border:{
        display:false,
      },
      stacked: true,
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
  layout: {
    padding: {
      top: 10, // Adjust as needed
      right: 10, // Adjust as needed
      bottom: 10, // Adjust as needed
      left: 10, // Adjust as needed
    },
  },
};













const databarchart1 = [
  {
    name: 'Daily Traffic',
    data: [20,30,40,10,45,50,30],
  },
]

const options1: ApexCharts.ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 7,
      columnWidth: '50%',
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ["#491FFF","#9F89FF", "#ffffff"], // end color
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 0,
      stops: [],
    },
  },
  dataLabels: {
    enabled: false, // Disable data labels
  },
  xaxis: {
    categories: ['00', '04', '08', '12', '14', '16', '18'],
    labels: {
      style: {
        colors: '#9aa0ac',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    max: 50, // Increase the Y-axis limit
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 1000,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 5,
          },
        },
      },
    },
  ],
};




interface Series {
  name: string;
  data: number[];
}


  const lineChartSeries: Series[] = [
    {
      name: 'Revenue',
      data: [50,64,48,66,49,68]
    },
    {
      name: 'Profit',
      data: [30,40,24,46,20,46]
    }
  ];

  const lineChartOptions: ApexCharts.ApexOptions = {
    colors: ['#5E39FF', '#00BFFF'],
    chart: {
      type: 'line',
      height: 280,
      toolbar: {
        show: false
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        let month = w.globals.categoryLabels[dataPointIndex];
        let tooltipContent = `<div class="custom-tooltip">
                                <div class="tooltip-header">${month}</div>`;
        w.globals.series.forEach((s, i) => {
          tooltipContent += `<div class="tooltip-item">
          <span class="dot" style="background-color: ${w.globals.colors[i]}"></span>
          ${w.globals.seriesNames[i]}: ${s[dataPointIndex]}
        </div>`;
        });
        tooltipContent += `</div>`;
        return tooltipContent;
      }
    },
    markers: {
      size: 0, // Hide markers initially
      colors: '#FFFFFF',
      strokeColors: '#8262FF',
      strokeWidth:3,

      hover: {
        size: 6, // Show markers when hovered
      }
    },
    xaxis: {
 
      categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
      labels: {
      show: true, // Show x-axis labels (months)
      hideOverlappingLabels: true, // Optional: Hide overlapping labels
     

    },
    axisBorder: {
      show: false // Hide x-axis lines
    },
    axisTicks: {
      show: false // Hide x-axis ticks
    }// Hide Y-axis line and title

    },
    yaxis: {
      max:100,
      show: false // Hide Y-axis line and title
    },
    stroke: {
      curve: 'smooth',
      width: 5,
    },
    
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show:false
       
    }
  }

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 170 },
    { field: 'progress', headerName: 'Progress', width: 100 },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 100 },
    { field: 'date', headerName: 'Date', width: 140 },
  ];
  
  const rows = [
    { id: 1, name: 'Jon Snow', progress: '50%', quantity: 35, date: new Date(2024, 6, 8).toLocaleDateString('en-UK', { day: 'numeric', month: 'long', year: 'numeric' }) },
    { id: 2, name: 'Cersei Lannister', progress: '75%', quantity: 42, date: new Date(2024, 6, 8).toLocaleDateString('en-UK', { day: 'numeric', month: 'long', year: 'numeric' }) },
    { id: 3, name: 'Jaime Lannister', progress: '60%', quantity: 45, date: new Date(2024, 6, 8).toLocaleDateString('en-UK', { day: 'numeric', month: 'long', year: 'numeric' }) },
    { id: 4, name: 'Arya Stark', progress: '80%', quantity: 16, date: new Date(2024, 6, 8).toLocaleDateString('en-UK', { day: 'numeric', month: 'long', year: 'numeric' }) },
    { id: 5, name: 'Daenerys Targaryen', progress: '90%', quantity: 0, date: new Date(2024, 6, 8).toLocaleDateString('en-UK', { day: 'numeric', month: 'long', year: 'numeric' }) },
  ];
  

  const pieoptions: ApexCharts.ApexOptions = {
    dataLabels: {
      enabled: false, // Disable data labels on the chart
    },
    chart: {
      type: 'pie',
      height: 250, // Reduced height for a smaller chart
      width: 250, // Added width to control the size
    },
    labels: ['Your files', 'System', 'Empty'], 
    colors: ['#4318FF', '#6AD2FF', '#EFF4FB'],
    legend: {
      position: 'bottom', 
      horizontalAlign: 'center',
      itemMargin: {
        horizontal: 10, // Adjusted margin for smaller size
        vertical: 5, 
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 180, // Smaller width for responsive breakpoint
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

const pieseries = [63, 25,12];

export default function Home() {


  const [selectedRows, setSelectedRows] = React.useState<number[]>([2, 3, 4]); // Default selected rows

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection.selectionModel);
  }
  return (
    <>
      <CssBaseline />
      <Container sx={containerStyle } maxWidth="lg"  disableGutters>
        <Box sx={{ flexGrow: 1, paddingTop: 3 }}>
          {/* Cards */}
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Item>
                  {item.icon && <IconContainer>{item.icon}</IconContainer>}
                  <div>
                    <Typography variant="subtitle2">{item.label}</Typography>
                    <Typography sx={{ fontWeight: 'bolder' }} variant="h5">{item.value}</Typography>
                    {item.extra && <Typography variant="caption">{item.extra}</Typography>}
                  </div>
                  {item.image && (
                    <div style={{ marginLeft: 'auto' }}>
                      <Image src={item.image} width={50} height={50} alt={item.label} />
                    </div>
                  )}
                </Item>
              </Grid>
            ))}
          </Grid>

          {/* Charts */}
          <Grid container spacing={2} sx={{ paddingTop: 2 }}>
            {/* Total Spent and Weekly Revenue in one row */}
            
            <Grid item xs={12} md={6}>
      <Paper sx={{ p: 2, height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0 }}>
          <Button className='graycolor thismonth'> <CalendarTodayTwoToneIcon className='graycolor'/>   This Month</Button>
          <Button > <BarChartIcon color='primary' fontSize='medium'/></Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' ,textAlign:'top' }}>
          <Box sx={{ flexShrink: 0, mr: 0,mb:10 }}>
            <Typography variant="h4" style={{fontWeight:'bolder'}}>$37.5K</Typography>
            <Typography fontSize={15} style={{color:'grey', alignItems:'center'}} >Total  <br/> Spent <span style ={{color:'#01B574'}}><ArrowDropUpIcon fontSize='small' />+ 2.45%</span></Typography> <Box>
            <Typography variant="h8" style ={{color:'#01B574'}}><CheckCircleRoundedIcon fontSize='small' style ={{color:'#01B574'}}/> On track</Typography>
          </Box></Box>
          <Box sx={{ flexGrow: 1 }}>
          <ReactApexChart options={lineChartOptions} series={lineChartSeries} type="line" height={300} />
          </Box>
        </Box>
      </Paper>
    </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>Weekly Revenue</Typography>

          <Button > <BarChartIcon color='primary' fontSize='medium'/></Button>
        </Box>
                <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', my: 4 }}>
     
      <Bar data={databarchart} options={options} plugins={[pointyBarPlugin]}  />
    </Box>
              </Paper>
            </Grid>

            {/* Check Table, Daily Traffic, and Your Pie Chart in the next row */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>Check Tables</Typography>

            <div className="datagrid-container custom-data-grid">
            <DataGrid
        rows={rows}
        columns={columns}
        className="custom-datagrid"
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        rowSelectionModel={selectedRows}
       onRowSelectionModelChange={handleSelectionChange}

          // Apply custom class based on selection

        hideFooter
        
      />
</div>
              </Paper>
            </Grid>

            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="h8" >Daily Traffic</Typography>

                <Typography variant="caption" color="green"><ArrowDropUpIcon fontSize='small' />+2.45%</Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 'bolder' }}>2.579 <Typography variant="caption">Visitors</Typography></Typography>
                <Box sx={{marginTop:"100px"}}>
          <ReactApexChart options={options1} series={databarchart1} type="bar" height={210} />

              </Box>

              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6">Your Pie Charts</Typography>
                <ReactApexChart options={pieoptions} series={pieseries} type="pie"  height={250}  />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>  
        </>
  );
}
