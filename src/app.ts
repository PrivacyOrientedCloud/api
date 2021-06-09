const express = require("express");

const app = express();
new (require("./helper/service"))(app);

app.listen(21525, () => {
    console.log(`Server is now listening on port PORT...`);
});
