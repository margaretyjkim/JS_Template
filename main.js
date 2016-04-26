$(documnet).ready(function () {

	var data = [
		{
			title: "",
			author: "",
			shotURL: "",
			description: ""
		},
		{
			title: "",
			author: "",
			shotURL: "",
			description: ""
		}
	]

	var postsContainer = $('#posts-container');
	var postTemplate = $('#post-template').html();

	data.forEach(function (post) {
		var templateItem = $(postTemplate);

		templateItem.find('.post__title').text(post.title);
		templateItem.find('.post__author').text(post.author);
		templateItem.find('.post__description').text(post.description);
		templateItem.find('.post__image').attr('src', post.shotUrl);

		postsContainer.append(templateItem);
	});
});