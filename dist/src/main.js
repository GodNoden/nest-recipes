"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const cors = require("cors");
    const corsOptions = {
        origin: '*',
        credentials: true,
        optionSuccessStatus: 200,
    };
    const port = 8080;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors(corsOptions));
    await app.listen(port);
    console.log("http://localhost:" + port);
}
bootstrap();
//# sourceMappingURL=main.js.map