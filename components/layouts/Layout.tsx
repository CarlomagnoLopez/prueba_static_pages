import {FC ,ReactNode} from "react"
import Head from "next/head"


interface Props{
    title?: string;
    children:ReactNode;
}


export const Layout:FC<Props> = ({children,title}) => {
    return(
        <>
            <Head>
                <title>{title || 'Test APP'}</title>
                <meta name="author" content="JC"/>
                <meta name="description" content={`información de ${title}`}/>
                <meta name="keywords" content="ejemplo"></meta>
            </Head>

       
            <main style={{
                padding:'0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}