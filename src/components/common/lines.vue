<template>
    <div class="aside-content">
        <div class="left-side aside-line"></div>
        <div class="righ-side aside-line"></div>
    </div>
</template>

<script>
    export default {
        name: 'aside-line',
        data () {
            return {};
        },
        created () {},
        mounted () {},
        methods: {},
        computed: {},
    };
</script>

<style type="text/css" lang="less" scoped>
    .aside-content {
        position: absolute;
        top: 50px;
        width: 100%;
        .aside-line {
            position: absolute;
            height: 510px;
            width: 1px;
            background-color: #3198ff;
            top: 0;

            &:before,&:after{
                content: '';
                width: 5px;
                height: 5px;
                position: absolute;
                left: -2px;
                background-color: #00deff;
            }
            &:after{
                bottom: -1px;
            }
        }
        .left-side {
            left: 20px;
        }
        .righ-side {
            right: 20px;
        }
    }
</style>
