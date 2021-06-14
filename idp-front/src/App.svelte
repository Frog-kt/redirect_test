<script>
	let promise;
	const handler = async () => {
		const uri = "http://localhost:3000/redirect";
		await fetch(uri, {
			method: "POST",
			origin: "http://localhost/",
			// credentials: "include",
			// headers: { "Content-Type": "application/json" },
		})
			.then((result) => {
				console.log("response");
				console.log(result);
			})
			.catch((err) => {
				console.log("error");
				console.log(err);
			});
	};
</script>

<main>
	<h1>Redirect test</h1>
	<button on:click={handler}>別ドメインへのリダイレクト</button>
</main>

<style>
</style>
