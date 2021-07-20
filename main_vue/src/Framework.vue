<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-07-19 15:30:02
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2021-07-20 15:14:49
-->
<template>
  <section>
    <header class="header">
      <nav>
        <ol>
          <li><a @click="goto('vuecli', '/vuecli')">vuecli</a></li> 
          <li><a @click="goto('app2', '/app-vue/')">app2</a></li> 
        </ol>
      </nav>
    </header>
    <div v-if="loading">loading</div>
    <div class="appContainer" v-html="content">content</div>
  </section>
</template>

<script>
	export default {
		name: 'framework',
		props: {
			loading: Boolean,
			content: String,
		},
		methods: {
			goto(title, href) {
				window.history.pushState({}, title, href);
			},
		},
	};
</script>

<style scoped>
  .header {
  }

  .appContainer {
    margin-top: 50px;
  }
</style>
