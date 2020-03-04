$(document).ready(() => {
	$.getJSON('/articles', data => {
		for (let i = 0; i < data.length; i++) {
			let model = data[i];

			$('#scraped-articles').prepend(
				// '<div class="row article-container card"><h3 class="article-title">' +
				// 	data[i].title +
				// 	'</h3><p>' +
				// 	data[i].summary +
				// 	'</p></div>'

				'<div class="row article-container ">' +
					'<div class="col-3">' +
					'   <img src=" ' +
					model.img +
					' " style="width:100%">' +
					' </div>' +
					'<div class="col-8">' +
					'   <a href=" ' +
					model.link +
					' "><h3>' +
					model.title +
					'   </h3></a>' +
					'   <p> ' +
					model.summary +
					'   </p>' +
					'</div>' +
					'<div class="col-1">' +
					'   <button class="save-article button" data-id="' +
					model._id +
					' ">+</button>' +
					'   </div>' +
					'</div>'
			);
		}
	});

	$('.save-article').on('click', () => {
		alert('hey!');
	});
});
