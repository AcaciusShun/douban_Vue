<template>
	<div class="sub-nav">
		<!-- 按钮导航 -->
		<div class="navBottom" v-if="mold ==='navBottom'">
			<div class="nav-item">
				<router-link></router-link>	
				<!-- replace blank -->
				<template v-if="currentUser.email">
					<a href="#">退出登录</a>
				</template>
				<template v-else>
					<router-link>登录豆瓣</template>
				</template>
			</div>
			<div class="nav-item">
				<a href="">使用桌面版</a>
				<a href="#">使用豆瓣app</a>
			</div>
		</div>

		<div class="quickNav" v-if="mold ==='quickNav'">
			<ul class="quick-nav">
				<li>
					<router-link>影院热映</router-link>
				</li>
				<li>
					<router-link>欧美新碟榜</router-link>
				</li>
				<li>
					<router-link>注册账号</router-link>
				</li>
				<li>
					<template v-if="currentUser.email">
						<a href="#">退出登录</a>
					</template>
					<template v-else>
						<router-link>登录豆瓣</template>
					</template>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapGetters }	from 'vuex'
export default {
	name:'sub-nav',
	props:{
		mold:{
			type:String,
			default: 'quickNav'
		}
	},

	data (){
		return {}
	},
	computed:{
		//正确链接
		//holder
		//存储
	},
	methods:{
		//登出
		//已有
	}
}

</script>
<style lang='scss' scoped="">
	.navBottom {
  width: 100%;
  border-bottom: 0.1rem solid #f3f3f3;

  .nav-item {
    border-top: 0.1rem solid #f3f3f3;
    padding: 1.3rem 0;
    text-align: center;
  }

  a {
    width: 50%;
    display: inline-block;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 1.5rem;
    color: #42bd56;

    &:first-child {
      border-right: 0.1rem solid #e5e5e5;
    }
  }
}

.quickNav {
  ul {
    overflow: hidden;
    margin: 1rem 0 0 0;
    padding-top: 0.6rem;

    li {
      float: left;
      width: 50%;
      padding: 0.3rem;
      box-sizing: border-box;
      font-size: 1.5rem;
    }

    a {
      display: block;
      max-width: 100%;
      padding: 1.2rem 0;
      line-height: 2rem;
      text-align: center;
      background-color: #f6f6f6;
      color: #494949;
      border-radius: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
}

</style>