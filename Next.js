/*          Self Documentation 

    // Next js is a React Freamwork for full stack web Application that is used to build Interactive, Dynamic and Fast React Application.
    // this  provide very powerfull feature of React like server-side rendering, routing, and static site generation.
    // You use React Components to build user Interface (design) and Next.js for Additional feature and optimization.
    // you can intead focus on building your product and Shipping Quickly.

    // Next.js have two type of Routers
    
    // Router (Like AJAX) => This is a mechanism that helps handle page navigation. You can use it within a page to navigate to different pages without reloading the entire page. It works like AJAX in the background.
 
    // 1.) App router (New):=>  * Support Server Cmponents
    //                          * It Uses New Experimental and latest Stable Features.
    //                          * Keep Seprate  to Server and client  Components for Better Handling.
    //                          * Better for New Projects

    // 2.) Pages Router(Old):=> * its a Original Routing System.
    //                          * In this Router Every page in a folder is a file  like /pages => pages/about.us => 
    //                          * Here is Version Dependency because it use the React version that is Installed in your Project if you have Installed
                                  17th Version of React then you cant use the latest feature of 18th Version of React untill you have not  Update it Manually with Latest Version of React.
    //                          * This is  Old but Currently Support and day by day its Improving.

    // React Version Handling  based on Router that which Router you are Using,
    //              if you are using App Router => Built-in React Canary (latest + experimental),
                    Or If You are Using Pages Router => it Grab the Version of React from package.json in to the Your Project
            // Canary phrase from coal-mine and Canary is Small Bird ( That Detect the dangerous Gases from the mine Before Starting the Work )
            // React Canary is similar work like Canary Bird that Detect and find the error or Bugs from the Project before Proceeding further.
    
    // Important features of Next.js

    1. File-based Routing => when you create a file inside the folder, this automatically became a Route. Example: pages/about.js = yourwebsite.com/about
    2. Server-side Rendering (SSR) => (Rendring => show the content in visual form, processing of HTML,react,etc. and then visualizing the content to user called is Rendring)
                                    when user Send Request then the page is rendor on Server side,
                                    and the page is become also Seo friendly.
                                    Function: getServerSideProps()
    3. Static Site Generation (SSG) =>  (this is a technique in which pages are automatically generated beforehand during the build time as static HTML files. These files are then served directly from the server or CDN whenever requested. )
                                       Pre-render pages at build time. (Pages build time pe ban jaate hain — fast aur SEO friendly.)
                                       Use getStaticProps() (and getStaticPaths() for dynamic routes). 
    4. API Routes => Create backend logic in the same project using pages/api/. No need for a separate server.
    5. New App Router (Next.js 13+) :=> Introduces app/ directory with React Server Components.  Supports nested layouts, loading states, and streaming. (Layouts, loading UI, aur nested routing ka better support milta hai.)
    6. Image Optimization => Automatic image resizing, lazy loading, and format conversion using the <Image> component.
    7. Built-in CSS & Sass Support => Supports global styles, CSS Modules, and Sass out of the box. ( CSS Modules, Global CSS aur Sass easily use kar sakte ho.)
    8. Fast Refresh => Live updates during development. ( Development time pe changes instantly browser me dikhte hain — bina page reload ke.)
    9. Middleware => Run logic (like authentication) before a request completes. (Har request ke pehle kuch logic run karna ho (like auth), to middleware use hota hai.)
   10. Internationalization (i18n) => Built-in support for routing and localization. (Agar website ko multiple languages me banana ho to built-in support hai.)

   ⚙️ Use Cases ( ⚒️ Kis Type ke Projects ke Liye Use Hota Hai? )
        Static websites (blogs, portfolios) ( Blogs, Portfolios, Blogging websites)
        Dynamic web apps (dashboards, SaaS apps) (Dashboards, SaaS products)
        eCommerce sites ( eCommerce stores)
        Hybrid apps using both SSR and SSG ( Hybrid websites = Static + Dynamic pages)
        

*/