import React, { useRef, useState, useLayoutEffect } from "react";

import LazyLoad from "react-lazyload";

import "./image.scss";

export default function Image(props) {
    const { url, isLazy } = props;
    const ref = useRef();
    const [loaded, setLoaded] = useState(false);

    useLayoutEffect(() => {
        console.log(ref.current);
    });

    return (
        <>
            {loaded ? "" : <div class="loading-placeholder">Not here yet</div>}
            {/* <LazyLoad height="">
                <img
                    className={`card-image card-loaded-${loaded}`}
                    ref={ref}
                    src={url}
                    onLoad={() => setLoaded(true)}
                    {...props}
                />
            </LazyLoad> */}
        </>
    );
}
