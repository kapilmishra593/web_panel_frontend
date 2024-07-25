import { GetServerSideProps } from 'next';
import poststyles from "../posts/style.module.scss";
import Link from 'next/link';
import Postlisting from '@components/components/postlisting/index';
const index = () => {
    return (
        <>
            <div className={poststyles.schedule}>
                <div className={poststyles.shdlFlex}>
                    <div className={poststyles.content}>
                        <h3 className={`${poststyles.title} text-4`}>
                            Posts
                        </h3>
                    </div>
                    <Link className={poststyles.shdlBtn} href="/add-post">
                        Add New Post
                    </Link>
                </div>
                <Postlisting />
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props:{}
    }
}

export default index