$(document).ready(() => {
	$.getJSON('/articles', data => {
		for (let i = 0; i < data.length; i++) {
			let model = data[i];

			if (model.saved) {
				$('#saved-articles').prepend(
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
						'<div class="row">' +
						'   <button class="remove-article button col-5" data-id="' +
						model._id +
						' "><i class="fa fa-trash"></i></button>' +
						'  <button class="comment-button col-5" data-id="' +
						model._id +
						' "><i class="fa fa-comments"></i></button> </div></div>' +
						'</div>'
				);
			}
		}
	});

	$(document).on('click', '.remove-article', function() {
		$(this)
			.children('i.fa-bookmark')
			.removeClass('fa-bookmark')
			.addClass('fa-check-circle');

		const articleID = $(this).attr('data-id');
		console.log(articleID);

		$.ajax({
			method: 'POST',
			url: '/unsave/' + articleID,
			data: {
				saved: false
			}
		}).done(data => {
			console.log('data: ', data);
			window.location.reload();
		});
	});

	$(document).on('click', '.comment-button', function() {
		$('#comment-modal').modal();

		const articleID = $(this).attr('data-id');
		console.log(articleID);

		$.ajax({
			method: 'GET',
			url: '/articles/' + articleID
		}).done(data => {
			console.log('data: ', data);
			$('#modal-title').prepend('Article Comments for: ' + data.title);

			for (let i = 0; i < data.comments.length; i++) {
				$('#comment-block').append(
					'<div class="comment-div">' +
						'<p class="comment-text">' +
						data.comments[i].body +
						'</p></div>'
				);
			}
			$('#save-comment').attr('data-id', data._id);
		});
	});

	$(document).on('click', '#save-comment', function() {
		const articleID = $(this).attr('data-id');

		$.ajax({
			method: 'POST',
			url: '/comment/' + articleID,
			data: {
				body: $('#new-comment').val()
			}
		}).done(function(data) {
			console.log('data: ', data);
		});

		$('#new-comment').val('');

		$('#comment-modal').modal();
	});
});
