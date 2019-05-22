export const Bar_two_options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: function (params) {
      let res = params[1].name+'：<br/>';
      let myseries = Bar_two_options.series; // 这儿是定义的这个对象名字，在这是Bar_two_options
      for (let i = 0; i < params.length; i++) {
          for(let j = 0;j< myseries[0].data.length; j++){
              if(myseries[i].data[j].name === params[i].name){
                if ( i === 0 ) {
                  res+= myseries[i].name + ' : '+ myseries[i].data[j].value+'</br>';
                } else {
                  res+= '占比 : '+ ((myseries[i].data[j].value / Bar_two_options.series[1].sum) * 100).toFixed(2) + '%' +'</br>'; // 这儿是定义的这个对象名字，在这是Bar_two_options
                }
              }
          }
      }
      return res;
    }
  },
  grid: {
    left: '2%',
    right: '8%',
    bottom: 0,
    top: '8%',
    containLabel: true,
  },
  legend: {
    data: [{
      'name': '商品销量',
      textStyle: {
        color: 'white'
      }
    }, {
      'name': '占比',
      textStyle: {
        color: 'white'
      }
    }],
    right: '1%',
    top: '0%',
    itemHeight: 6,
    itemWidth: 15,
    itemGap: 30
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    data: ['北京', '上海', '广州', '深圳', '成都'],
    nameTextStyle: {
      color: 'white'
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      interval: 0,
      align: 'left',
      margin: 50,
      color: 'white'
    },
    axisLine: {
      show: false
    }
  },
  series: [
    {
      type: 'bar',
      name: '商品销量',
      data:[
        {
          name: '北京',
          value: 567
        },
        {
          name: '上海',
          value: 671
        },
        {
          name: '广州',
          value: 375
        },
        {
          name: '深圳',
          value: 872
        },
        {
          name: '成都',
          value: 378
          },
      ],
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'right',
            color: 'white'
          },
          barBorderRadius: 5,
          color: '#00b8e2'
        }
      },
      barWidth: 8
    },
    {
      type: 'bar',
      name: '占比',
      barGap: '40%',
      barCategoryGap: '60%',
      data:[
        {
          name: '北京',
          value: 767
        },
        {
          name: '上海',
          value: 171
        },
        {
          name: '广州',
          value: 275
        },
        {
          name: '深圳',
          value: 572
        },
        {
          name: '成都',
          value: 178
          },
      ],
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'right',
            color: 'white',
            formatter: params => {
              let res = params.value;
              let sum = Bar_two_options.series[1].sum; // 这儿是定义的这个对象名字，在这是Bar_two_options
              return ((res / sum) * 100).toFixed(2) + '%';
            }
          },
          barBorderRadius: 5,
          color: '#0b78e5'
        }
      },
      barWidth: 8,
      sum: 1000 // 自定义的一个值，总值用来算占比的
    },
  ],
  toolbox: {
    show: false
  }
}
