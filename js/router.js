const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/refaat-app/refaat/pages/404.html",
    "/refaat-app/refaat/": "/refaat-app/refaat/pages/index.html",
    "/refaat/about": "/refaat-app/refaat/pages/about.html",
    "/refaat/lorem": "/refaat-app/refaat/pages/lorem.html",
    "/refaat/ahmed": "/http://abubakr.epizy.com/",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
