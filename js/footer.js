var footerView = {
	"html": `<div class="footer-wrap">
				<img class="biopic" src="images/biopic.png">
				<div class="footer-box">
					<p>Matthew J Nerger is a freelance front-end web developer in Miami, Florida. </p>
				</div>
				<div class="footer-box">
					<p>Visit my <a href="http://github.com/towercity" target="_blank">GitHub</a> page to see more of my coding projects.</p>
				</div>
				<div class="footer-box">
					<p>View my <a href="http://towercity.github.io/resume" target="_blank">resume</a> for more of my work and education history.</p>
				</div>
			</div>`,

	"render": function () {
		$('footer').append(this.html);
	}
}

footerView.render();
