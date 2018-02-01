let url = 'https://www.instagram.com/marlonme09/?__a=1';
const insta = fetch(url);

insta.then(data => { return data.json(); })

.then(data => {
  const { username : usuario, biography :bio } = data.user;

  console.log(`Usuario: ${usuario}, Bio: ${bio}`);
  let posts = [...data.user.media.nodes];

  posts.sort((a, b) => {
    return b.likes.count - a.likes.count;
  });

  posts.forEach(post => {
    console.log(`Likes: ${post.likes.count}, Pie de Foto: ${post.caption}, Comentarios: ${post.comments.count}`);
  });

});