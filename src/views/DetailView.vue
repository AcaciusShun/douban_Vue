<template>
	
</template>

<script>

	import { mapState } from 'vuex'
	import Banner from '../components/Banner'
	import Tags from '../components/Tags'
	import DownloadApp from '../components/DownloadApp'
	import Loading from '../components/Loading'

	export default {
		name: 'detail-view',
		components:{ Banner,Tags,DownloadApp,Loading },
		data () {
			return {
				showLoading: true
			}
		},
		filters: {
			toArray (value) {
				return value.split(",")
			}
		},
		computed: {
			content: function () {
				return this.eventItem.replace(/<img.+?>/ig,'')
			},
			...mapState({
				eventItem: state => state.activities.eventItem
			}) 
		},
		
		created () {
    // Getting route params
    const id = this.$route.params.id

    // Dispatching getSingleEvent
    this.$store.dispatch({
      type: 'getSingleEvent',
      id: id
    }).then(res => {
      // Success handle
      this.showLoading = false
    })
  }

	}

</script>

<style lang="scss" scoped>
	

</style>