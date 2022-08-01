<template>
	<v-app-bar app clipped-left>
		<h1 id="app-bar-title">
			rock-solid
		</h1>
	</v-app-bar>
</template>

<script lang="js">
export default {
	name: "Navbar"
}
</script>

<style lang="sass" scoped>
@import '../styles/_imports'

#app-bar-title
	font-family: 'Codystar Regular', sans-serif
	font-size: 1.5rem
	font-weight: bold
	color: $dark-primary
	animation: glow 1s ease-in-out infinite alternate


@-webkit-keyframes glow
	from
		text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #DC6616, 0 0 40px #DC6616, 0 0 50px #DC6616, 0 0 60px #DC6616, 0 0 70px #DC6616
	
	to
		text-shadow: 0 0 20px #fff, 0 0 30px #FC9753, 0 0 40px #FC9753, 0 0 50px #FC9753, 0 0 60px #FC9753, 0 0 70px #FC9753, 0 0 80px #FC9753

</style>