import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({ title, description, pathname, children }) => {
    const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
    }
    return (
        <>
            <title>{seo.title}</title>
            <html lang="en" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <link rel="canonical" href={siteUrl} />
            <meta name="language" content="English" />
            <meta name="keywords" content="jan, Wermeckes, software, developer, portfolio, projects, germany, munich" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content="https://wermeckes.com/assets/favicon.png" />
            
            <meta property="og:title" content={seo.title} />
            <meta name="twitter:site" content="@"/>
            <meta property="og:site_name" content={seo.title} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://wermeckes.com/assets/favicon.png" />

            {children}
        </>
    )
}

export default Seo
