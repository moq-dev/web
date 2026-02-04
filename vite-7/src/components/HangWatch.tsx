import { useEffect, useRef, type FC } from 'react';
import '@moq/hang-ui/watch';
import '@moq/hang/watch/element';

interface HangWatchElement extends HTMLElement {
    url: string;
    path: string;
    muted?: boolean;
    latency?: string;
    reload?: boolean;
}

type Props = {
    url: string;
    path: string;
};

const HangWatch: FC<Props> = ({ url, path }) => {
    const ref = useRef<HangWatchElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            element.setAttribute('url', url);
            element.setAttribute('path', path);
            element.setAttribute('muted', '');
            element.setAttribute('latency', '100');
            element.setAttribute('reload', '');
        }
    }, [url, path]);

    return (
        <hang-watch-ui>
            <hang-watch ref={ref}>
                <canvas style={{ width: '100%', height: 'auto' }}></canvas>
            </hang-watch>
        </hang-watch-ui>
    );
};

export default HangWatch;