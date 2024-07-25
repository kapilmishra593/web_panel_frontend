import React from 'react';
import { GetServerSideProps } from 'next';
import MediaLibrary from "../../layout/media/index";

const Media = () => {
    return (
        <div>
            <MediaLibrary />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default Media