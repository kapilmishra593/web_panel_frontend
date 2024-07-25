import React from 'react';
import { GetServerSideProps } from 'next';
import Posts from '@components/layout/posts';

const posts = () => {
    return (
        <div>
            <Posts />
        </div>
    );
}

export default posts