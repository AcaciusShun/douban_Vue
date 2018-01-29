<template>
	<div class="header-bar">
		<h1 class="title">
			<router-link>
				豆瓣
			</router-link>
		</h1>
		<ul>
			<li>
				<router-link>电影</router-link>
			</li>
			<li>
				<router-link>图书</router-link>
			</li>
			<li>
				<router-link>广播</router-link>
			</li>
			<li>
				<router-link>小组</router-link>
			</li>
		</ul>	
		<span class="talion" @click="showTalion"></span>
	</div>

</template>
<script>
	export default{
		name: 'header-bar',
		data () {
			return {}
		},
		methods: {
			showTalion: function () {
				this.$emit('showTalion')
			}
		}
	}

</script>

<style  scoped>
	.header-bar{
		.title{
			flex: 1;
			max-width: 4.6rem;
			max-width: 2.2rem;
			margin-right: 1.8rem;
			font-size: 0;
			line-height: 3.2rem;
			color: #00b600;
			word-break: break-all;

			background-size: cover;

			a{
				display: block;
			}
		}
		ul {
			display: flex;
			flex: 1;
			justify-content: flex-end;
		}
		li {
			display: inline-block;
			font-size: 1.6rem;
			margin-right: 1.2rem;
		}

		.talion {
			font-size: 0;
			background-size: cover;
			width: 2.4rem;
			height: 1.8rem;
			margin-top: 0.4rem;
		}
	}

</style>