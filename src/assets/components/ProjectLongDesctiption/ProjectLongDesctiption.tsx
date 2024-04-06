import {ReactNode} from "react";

type PropsWithChildren<P> = P & { children?: ReactNode };

export default function ProjectLongDescription({children}: PropsWithChildren<any>) {
    return <>
        {children}
    </>
}
