import PostItem from './post-item'
import classes from './posts-grid.module.css'
function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post,index) => (
        <PostItem key={index} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
