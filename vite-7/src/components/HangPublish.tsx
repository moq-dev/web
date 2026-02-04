import { useEffect, useRef, type FC } from 'react';
import '@moq/hang-ui/publish';
import '@moq/hang/publish/element';

interface HangPublishElement extends HTMLElement {
    url: string;
    path: string;
}

type Props = {
    url: string;
    path: string;
};

const HangPublish: FC<Props> = ({ url, path }) => {
    const ref = useRef<HangPublishElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            element.setAttribute('url', url);
            element.setAttribute('path', path);
        }
    }, [url, path]);

    return (
        <hang-publish-ui>
            <hang-publish ref={ref}>
                <video style={{ width: '100%', height: 'auto' }} muted autoPlay></video>
            </hang-publish>
        </hang-publish-ui>
    );
};

export default HangPublish;