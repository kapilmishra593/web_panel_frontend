import { GetServerSideProps } from 'next';
import BlogPostform from '../../forms/blog-post-form/index';
const addPost = () => {
    return (
        <>
            <div className='text-white'>
                <h1 className='mb-4'>Edit Post</h1>
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