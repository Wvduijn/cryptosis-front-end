<template>
	<div>
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item" href="https://bulma.io">
					Cryptosis
					<!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> -->
				</a>

				<a
					role="button"
					class="navbar-burger burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>

			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-start">
					<a class="navbar-item">
						Home
					</a>

					<a class="navbar-item">
						Watchlist
					</a>

					<a class="navbar-item">
						Portfolio
					</a>

					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link">
							More
						</a>

						<div class="navbar-dropdown">
							<a class="navbar-item">
								About
							</a>

							<hr class="navbar-divider" />
							<a class="navbar-item">
								Report an issue
							</a>
						</div>
					</div>
				</div>

				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<a class="button is-primary">
								<strong>Sign up</strong>
							</a>
							<a class="button is-light">
								Log in
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
export default {
	name: 'Header',
}
</script>
<style lang="scss"></style>
