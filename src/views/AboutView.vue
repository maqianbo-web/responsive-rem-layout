<template>
    <div class="container">
        <div class="nav">
            <div
                class="nav-item"
                :class="{ actived: v.key === selectNav }"
                v-for="v in navList"
                :key="v.key"
                @click="selectNav = v.key"
            >
                {{ v.label }}
            </div>
        </div>
        <div class="main">
            <van-card
                class="main-item"
                v-for="v in cardList"
                :key="v.title"
                :num="v.num"
                :price="v.price"
                desc="描述信息"
                :title="v.title"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { cardList } from '@/constant/index';

@Component({})
export default class AboutView extends Vue {
    private navList = [
        { key: 'quanbu', label: '全部' },
        { key: 'taocan', label: '套餐' },
        { key: 'xiaochi', label: '小吃' },
        { key: 'yinliao', label: '饮料' },
        { key: 'lingshi', label: '零食' },
        { key: 'youhui', label: '优惠' },
    ];
    private selectNav = 'quanbu';
    private get cardList() {
        if (this.selectNav === 'quanbu') {
            return cardList;
        } else {
            return cardList.filter((v) => v.type === this.selectNav);
        }
    }
}
</script>

<style lang="less" scoped>
@boder-radius: 10px;
@bg-color: #fafafa;
.container {
    display: flex;

    height: 100%;
    .nav {
        &-item {
            background: @bg-color;
            &.actived {
                color: #42b983;
                background: #fff;
            }
        }
    }
    .main {
        flex: 1;
        overflow: auto;

        ::v-deep {
            .van-card {
                border-radius: @boder-radius;
            }
        }
        &-item {
            overflow: auto;
        }
    }
}
@media screen and (max-width: 375px) {
    .container {
        flex-direction: column;
        .nav {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            // grid-template-rows: @height @height @height;
            grid-row-gap: 20px;
            grid-column-gap: 20px;
            &-item {
                text-align: center;
            }
        }
        .main {
            &-item {
                margin-top: 20px;
            }
        }
    }
}
@media screen and (min-width: 376px) {
    .container {
        .nav {
            background: #fafafa;
            &-item {
                padding: 20px;
                margin-bottom: 20px;
            }
        }
        .main {
            margin-left: 20px;
        }
    }
}
</style>
