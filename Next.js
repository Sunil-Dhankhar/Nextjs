/*          Self Documentation 

    // Next js is a React Freamwork for full stack web Application that is used to build Interactive, Dynamic and Fast React Application.
    // this  provide very powerfull feature of React like server-side rendering, routing, and static site generation.
    // You use React Components to build user Interface (design) and Next.js for Additional feature and optimization.
    // you can intead focus on building your product and Shipping Quickly.

     Folder Structure (Basic)
        my-app/
        ├── pages/
        │   ├── index.js         → Home page (route: /)
        │   ├── about.js         → About page (route: /about)
        │   └── api/hello.js     → API route (GET /api/hello)
        ├── public/              → Static files
        ├── styles/              → CSS / SCSS files
        ├── next.config.js       → Config file (optional)


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
                    Or If You are Using Pages Router => it Track the Version of React from package.json in to the Your Project
            // Canary phrase from coal-mine and Canary is Small Bird ( That Detect the dangerous Gases from the mine Before Starting the Work )
            // React Canary is similar work like Canary Bird that Detect and find the error or Bugs from the Project before Proceeding further.
    
    // Important features of Next.js

    1. File-based Routing => when you create a file inside the folder, this automatically became a Route. (pages/ folder ke andar jo bhi file banate ho, wo automatically ek route ban jata hai. )
                                    Example: pages/about.js = yourwebsite.com/about 
    2. Server-side Rendering (SSR) => (Rendring => show the content in visual form, processing of HTML,react,etc. and then visualizing the content to user called is Rendring)
                                    when user Send Request then the page is rendor on Server side, and the page is become also Seo friendly.
                                    (Page server pe render hota hai jab user request bhejta hai. SEO friendly hota hai.)
                                    Function: getServerSideProps().
    3. Static Site Generation (SSG) =>  (this is a technique in which pages are automatically generated beforehand during the build time as static HTML files. These files are then served directly from the server or CDN whenever requested. )
                                       Pre-render pages at build time. (Pages build time pe ban jaate hain — fast aur SEO friendly.)
                                       Use getStaticProps() (and getStaticPaths() for dynamic routes). 
    4. API Routes => Create backend logic in the same project using pages/api/. No need for a separate server. (Backend code likhne ke liye pages/api/ folder use kar sakte ho. Alag se server banane ki zarurat nahi.)
    5. New App Router (Next.js 13+) :=> Introduces app/ directory with React Server Components.  Supports nested layouts, loading states, and streaming. (app/ folder introduce hua hai. Layouts, loading UI, aur nested routing ka better support milta hai. Server Components bhi use kar sakte ho.)
    6. Image Optimization => Automatic image resizing, lazy loading, and format conversion using the <Image> component.(<Image> component se images fast load hoti hain, resize aur lazy load bhi hoti hain.)
    7. Built-in CSS & Sass (Syntactically Awesome Stylesheets), Scss Support => Supports global styles, CSS Modules, and Sass out of the box. ( CSS Modules, Global CSS aur Sass easily use kar sakte ho.)
    8. Fast Refresh => Live updates during development. ( Development time pe changes instantly browser me dikhte hain — bina page reload ke.)
    9. Middleware => Run logic (like authentication) before a request completes. (Har request ke pehle kuch logic run karna ho (like auth), to middleware use hota hai.)
   10. Internationalization (i18n) => Built-in support for routing and localization. (Agar website ko multiple languages me banana ho to built-in support hai.)

   ⚙️ Use Cases ( ⚒️ Kis Type ke Projects ke Liye Use Hota Hai? )
        Static websites (blogs, portfolios) ( Blogs, Portfolios, Blogging websites)
        Dynamic web apps (dashboards, SaaS apps) (Dashboards, SaaS products) => SaaS = Software as a Service (Service provider like gmail, google drive)
        eCommerce sites ( eCommerce stores)
        Hybrid apps using both SSR and SSG ( Hybrid websites = Static + Dynamic pages) (SSG => Static)(SSR => Server Side Rendering)
                pages/
                ├── index.js                → SSG
                ├── blog/
                │   └── [slug].js           → SSG
                ├── dashboard.js           → SSR
                ├── products.js            → SSG with ISR



Sass / scss both are advanced css stylesheets used in modren world and basically scss is more powerfull and popular then sass. we use scss in projects bescause its easy and like old css style, so you can easily upgrade your old css into scss file.

basic structure of scss

project/
├── styles/
│   ├── base/
│   │   ├── _reset.scss
│   │   ├── _typography.scss
│   ├── components/
│   │   ├── _button.scss
│   │   ├── _card.scss
│   ├── layout/
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   ├── utilities/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   ├── main.scss

        
Short Summery till Here => Next.js is React based full Stack Framework that is used for create web applications , Hybrid apps, Ecommerce sites, Dynamic Apps, Blogging Sites, Portfolios, Saas Apps etc. Nextjs is a Super Power Version of React that Provide a Control of Frontend and Backend with any Configration and Setup.
                           This Framework create More Fast and Seo friendly to React. This is provide a powerful feature of Reacte like  SSR (Server Side Rendring) and SSG (Static Side Genration). This used React Components for Build User interface (UI) and Nextjs is provide additional feature for functionality. 
                           This have Two type of Router like app Router and another is Pages Router. App router is new Modren router that provide ability use modren Functionality or feature into your script that is unofficial and just are Available for Testing Purpose. 
                           and other hand the pages Router is old but Powerfull feature or Router that use Stable feature and official feture of React that are already Tested and safe.
                           React Grab the Version from you project that depends on your Router that which you are using like if you using App Router then it track the version from Built-in React Canary or if you are using the Pages Router then it track theversion from your Project Package.json file.
                           Next.js Provide Some Important Feature's Like This will create automatically Route of new file when you add new file inside the folder, this is also provide Server Side rendring,
                           This will aalso provide Static site generation that automatically Genrate Static HTML Page during but before Page Build time. you can Wtite your Backend Script or logic in same Project using Pages/Api/ and for this not need of seprate server. 
                           This will Provide Better Support of loading Ui, live streaming, Nested layout and this also provide Server Components of React. this is also provide the Support of Built in Css, saas and Scss that you can use easily use the global css, css modules and saas,scss easily and upgrade your old Css into modren Css that supported by react or nextjs.
                           this will provide a feature that you can watch or see Live Updates During the Development without page Refresh. this also have a powerfull feature that is run a Logic like authentication of user before a request process called as middleware feature of next or React.
                           this will provide a Built-In feature that you can create your web project in multiple Languages.
                           with react and Nextjs you can create E-commerce Store, Dashboards, Saas Product(Online Service provider), Hybrid Websites (Static + Dynamic Pages).

        Pre-requisite Knowledge for Learning Next.js
Nextjs is React Based Framwork , so Move On React project, You should Knowledge of some Basic Technologies like
        1. HTML (Structure of Web Pages) =>    Elements (<div>, <h1>, <a>, <img>), Forms (<form>, <input>, <button>), Attributes (href, src, alt, etc.). because React and Nextjs components are written in JSX (Javascript XML), this is like Html but its not Html.

        2. CSS (Styling Web Pages) => Selectors, classes, IDs, Box model, margin/padding, Flexbox, Grid, Media queries (for responsive design). in NextJS you can use CSS Modules, Global CSS and also SCSS. Understanding of styling is must.

        3. JavaScript (Logic & Interactivity) => Variables (let, const), Functions, Arrays and objects, ES6+ features (arrow functions, destructuring, map, filter), DOM basics (Optional). In NextJs this is very usefule beacause Next.js = React = JavaScript!. you plan your Logics according to your understanding and output is fully based on your logics Skill and how you use conditions, loops, states management etc.

        4. React (Foundation for Next.js) => JSX syntax, Components (functional), props and state, useState, useEffect hooks, Basic routing (using react-router or idea of navigation), Lifting state up. this is very usefull and important because the NextJs is based on React. if you dont know about React then it is more difficult to understand the Nextjs.

        
*/