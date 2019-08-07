<template>
    <div id="report" class="content"  style="width: 100%">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="myChart" style="width: 50%;height:400px;"></div>
        <div id="myChart1" style="width: 50%;height:400px;"></div>
    </div>
</template>

<script>
    export default {
        name: 'home2',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            this.drawLine();

        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
                // 绘制图表
                myChart.setOption({
                    title: {text: '在Vue中使用echarts'},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
                //window.onresize = myChart.resize;
                // 绘制图表
                myChart1.setOption( {
                    title : {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
                //window.onresize = myChart1.resize;
                //echarts可以根据外部窗口大小自适应大小
                window.addEventListener("resize", function () {

                    myChart.resize();
                    myChart1.resize();
                });

            }
        }
    }
</script>

<style lang="scss">
    /**
     * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
     * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
     */

</style>
