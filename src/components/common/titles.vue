<template>
    <div class="top-title">
        <span class="title">{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: 'top-title',
        props: {
            titleName: [String],
        },
        data () {
            return {
                title: this.titleName,
            };
        },
        created () {
        },
        mounted () {},
        methods: {
            setTitle: function (data) {
                this.title = data;
            },
        },
        components: {},
        computed: {},
    };
</script>

<style type="text/css" lang="less" scoped>
    .top-title {
        height: 75px;
        width: 100%;
        text-align: center;
        font-size: 36px;
        color: #00b4ff;
        background: url("../../assets/top_title_background.png") top center;
        .title {
            display: inline-block;
            padding: 0 20px;
            line-height: 75px;
            position: relative;
            font-family: 'FZCTHJW';
            font-weight: normal;
            &:before, &:after {
                position: absolute;
                content: '+';
                color: #ee6539;
                top: 31px;
                font-size: 12px;
                line-height: 12px;
            }
            &:before {
                left: 0;
            }
            &:after {
                right: 0;
            }
        }
    }
</style>
