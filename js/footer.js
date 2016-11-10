var footerView = {
	"html": `<div class="footer-wrap">
				<img class="biopic" src="images/biopic.png">
			</div>`,

	"render": function () {
		$('footer').append(this.html);
	}
}

footerView.render();
