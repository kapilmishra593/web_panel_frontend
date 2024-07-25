import { GetServerSideProps } from 'next';
import BlogPostform from '../../forms/blog-post-form/index';
import Styles from '../add-post/style.module.scss'
const addPost = () => {
    return (
        <>
            <div className={Styles.add_post_wrapper}>
                <h1 className='mb-4'>Add New Post</h1>
                <BlogPostform />
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


  return {
    props:{

    }
  }
}

export default addPost