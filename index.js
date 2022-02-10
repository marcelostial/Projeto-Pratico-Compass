import passowrdLogical from "./scripts/password-logical.js";
import logoutLogical from "./scripts/logout-logical.js";
import watchLogical from "./scripts/watch-logical.js";
import climateLogical from "./scripts/climate-logical.js";

history.pushState(
    null,
    "Compass - Login",
    "https://marcelostial.github.io/Projeto-Pratico-Compass/login",
)

passowrdLogical()
logoutLogical()
climateLogical()

setInterval(() => {
    watchLogical()
}, 1000);
